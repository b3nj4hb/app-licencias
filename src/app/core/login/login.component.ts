import { Component, OnInit } from '@angular/core';
import { usuario, validarUsuario } from 'src/app/classes/classes';
import { JwtService } from 'src/app/services/jwt.service';
import swal from 'sweetalert2'
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user = new usuario;
  vUser = new validarUsuario;
  constructor(private jwt: JwtService, private router: Router) { }
  localusuario = new validarUsuario;

  ngOnInit(): void {
    // this.login()
    // console.log(this.parseJwt(sessionStorage.token))
    // this.saveToken()
  }

  login() {
    this.jwt.login(this.vUser).subscribe(data => {
      // Guardar el token en el local storage
      localStorage.token = data.accessToken
      // .then(this.saveToken())
      this.saveToken()
      // Alerta
      swal.fire('Login', `Hola ${this.localusuario.nombres}, has iniciado sesión con exito!`)
      this.localusuario.rol == 'Administrador' ? this.router.navigate(['/admin/view-voucher'])
        : this.router.navigate(['/contribuyente/registro'])
    }, error => {
      if (error) {
        swal.fire('Error Login', 'Usuario o clave Incorrecta', 'error');
      }
    })
    // this.saveToken()

  }

  // Desencriptar Token
  parseJwt(token: any) {
    return JSON.parse(atob(token.split('.')[1]));
  }

  // Guardar datos del token en el local storage
  saveToken() {
    // Desencriptar token y almacenar objeto
    let user = this.parseJwt(localStorage.token)
    // Guardar en localstorage como json
    localStorage.user = JSON.stringify(user['user'])
    console.log(user['user'])
    // convertir a json el objeto del localstorage
    let usuariolocal = JSON.parse(localStorage.user)
    console.log(usuariolocal['idper'])
    console.log(usuariolocal['iduser'])
    // return usuariolocal
    // this.localusuario.idpersona = usuariolocal['idper']
    // this.localusuario.idusuario = usuariolocal['idrol']
    this.localusuario.nombres = usuariolocal['nombres']
    // this.localusuario.password = usuariolocal['idrol']
    this.localusuario.rol = usuariolocal['rol']
    // this.localusuario.user = usuariolocal['idrol']
    console.log(this.localusuario.nombres)
    return usuariolocal
  }
}
