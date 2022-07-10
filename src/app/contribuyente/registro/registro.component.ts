import { Component, OnInit } from '@angular/core';
import { persona, postpersona, tipo_documento, tipo_persona } from 'src/app/classes/classes';
import { personaService } from 'src/app/services/persona.service';
import { provinciaService } from 'src/app/services/provincia.service';
import { tipoDocumentoService } from 'src/app/services/tipoDocumento.service';
import { tipoPersonaService } from 'src/app/services/tipoPersona.service';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

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
  provincia: any[] = [];

  constructor(private perServ: personaService,
    private tipoPerServ: tipoPersonaService,
    private tipoDocServ: tipoDocumentoService,
    private provServ: provinciaService,
    private router: Router) { }

  ngOnInit(): void {
    this.listarTipoPersona();
    this.listarTipoDocumento();
    // this.listarProvincia();
  }
  crearPersona() {
    // this.personaCrear.idtipo_persona.idtipo_persona = Number(this.tipoPersonaCrear.idtipo_persona)
    // this.personaCrear.idtipo_documento.idtipo_documento = Number(this.tipoDocumentoCrear.idtipo_documento)
    this.perServ.save(this.personaCrear).subscribe(data => { console.log(data) })
    // console.log(this.personaCrear)
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
  listarProvincia() {
    this.provServ.list().subscribe(data => {
      this.provincia = data;
      // console.log(this.provincia)
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
  confirmar() {
    Swal.fire({
      title: 'VERIFIQUE LOS DATOS',
      // text: "Identidicación del solicitante",

      /*html: `<h2>Identificación del solicitante</h2>
      <ul>
      <li><p><strong>Tipo de contribuyente: </strong>{{personaCrear.tipoPersona}</p></li>
      <li><p><strong>Tipo de contribuyente: </strong>{{personaCrear.nombre}}</p></li>
      </ul>
      `,*/
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
