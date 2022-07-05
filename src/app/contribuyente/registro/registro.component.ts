import { Component, OnInit } from '@angular/core';
import { persona } from 'src/app/classes/classes';
import { personaService } from 'src/app/services/persona.service';
import { provinciaService } from 'src/app/services/provincia.service';
import { tipoDocumentoService } from 'src/app/services/tipoDocumento.service';
import { tipoPersonaService } from 'src/app/services/tipoPersona.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  personaCrear = new persona;
  tipoPersona: any[] = [];
  tipoDocumento: any[] = [];
  provincia: any[] = [];

  constructor(private perServ: personaService,
    private tipoPerServ: tipoPersonaService,
    private tipoDocServ: tipoDocumentoService,
    private provServ: provinciaService) { }

  ngOnInit(): void {
    this.listarTipoPersona();
    this.listarTipoDocumento();
    // this.listarProvincia();
  }
  crearPersona() {
    this.personaCrear.idpersona = Number(this.personaCrear.idpersona)
    this.perServ.save(this.personaCrear).subscribe(data => { console.log(data) })
    console.log(this.personaCrear)
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
}
