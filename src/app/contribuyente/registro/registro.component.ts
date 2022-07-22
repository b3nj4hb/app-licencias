import { Component, OnInit } from '@angular/core';
import { localidad, persona, persona_localidad, postpersona, tipo_documento, tipo_persona } from 'src/app/classes/classes';
import { personaService } from 'src/app/services/persona.service';
import { tipoDocumentoService } from 'src/app/services/tipoDocumento.service';
import { tipoPersonaService } from 'src/app/services/tipoPersona.service';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';
import { DistritoService } from 'src/app/services/distrito.service';
import { LocalidadService } from 'src/app/services/localidad-service.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  personaCrear = new postpersona;
  tipoPersonaCrear = new tipo_persona;
  tipoDocumentoCrear = new tipo_documento;
  tipoPersona: any[] = [];
  tipoDocumento: any[] = [];
  distrito: any[] = [];
  localidadCrear = new localidad;
  personalocalidadCrear = new persona_localidad

  constructor(private perServ: personaService,
    private tipoPerServ: tipoPersonaService,
    private tipoDocServ: tipoDocumentoService,
    private localidadServ: LocalidadService,
    private distritoServ: DistritoService,
    private router: Router) { }

  ngOnInit(): void {
    this.listarTipoPersona();
    this.listarTipoDocumento();
    this.listarDistrito();
  }

  crearLocalidad() {
    this.localidadServ.saveLocalidad(this.localidadCrear).subscribe(data => {
      console.log(data)
    })
  }
  crearPersonaLocalidad() {
    this.crearLocalidad()
    this.localidadServ.savePersonaLocalidad(this.personalocalidadCrear).subscribe(data => {
      
    })
  }
  listarDistrito() {
    this.distritoServ.list().subscribe(data => {
      this.distrito = data;
      // console.log(this.distrito)
    })
  }
  guardarPersona() {
    sessionStorage.setItem("persona", JSON.stringify(this.personaCrear));
    sessionStorage.nombre = this.personaCrear.nombre
    sessionStorage.ruc = this.personaCrear.ruc
    sessionStorage.numdoc = this.personaCrear.num_documento
  }
  crearPersona() {
    // this.personaCrear.idtipo_persona.idtipo_persona = Number(this.tipoPersonaCrear.idtipo_persona)
    // this.personaCrear.idtipo_documento.idtipo_documento = Number(this.tipoDocumentoCrear.idtipo_documento)
    this.perServ.save(this.personaCrear).subscribe(data => {
      // console.log(data)
    })
    // console.log(this.personaCrear)
    this.guardarPersona()
  }
  listarTipoPersona() {
    this.tipoPerServ.list().subscribe(data => {
      this.tipoPersona = data;
      // console.log(this.tipoPersona)
    })
  }
  listarTipoDocumento() {
    this.tipoDocServ.list().subscribe(data => {
      this.tipoDocumento = data;
      // console.log(this.tipoDocumento)
    })
  }
  obtenerIdTipoPersona(id: any) {
    // console.log(id.target.value)
    this.personaCrear.idtipo_persona = Number(id.target.value)
  }
  obtenerIdTipoDocumento(id: any) {
    // console.log(id.target.value)
    this.personaCrear.idtipo_documento = Number(id.target.value)
  }
  obtenerIdDistrito(id: any) {
    // console.log(id.target.value)
    this.localidadCrear.iddistrito = Number(id.target.value)
  }
  confirmar() {
    Swal.fire({
      title: 'VERIFIQUE LOS DATOS',
      // text: ("Identidicación del solicitante: \n"+
      // 'Nombre: '+this.personaCrear.nombre+'\n'+
      // 'Apellidos: '+this.personaCrear.ape_pat+' '+this.personaCrear.ape_mat+'\n'+
      // 'N° RUC: '+this.personaCrear.ruc+'\n'+
      // ''),

      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Registrar!',
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire(
          'Registrado',
          'Sus datos han sido registrados',
          'success'
        )
        this.crearPersona()
        this.router.navigate(['/contribuyente/anexos'])
      }
    })
  }
}
