import { Component, OnInit } from '@angular/core';
import { persona } from 'src/app/classes/classes';
import { personaService, tipoPersonaService } from 'src/app/services/contribuyente.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  personaCrear = new persona;
  tipoPersona: any[] = [];

  constructor(private perServ: personaService,
    private tipoPerServ: tipoPersonaService) { }

  ngOnInit(): void {
    this.listarTipoPersona();
  }
  crearPersona() {
    this.personaCrear.idpersona = Number(this.personaCrear.idpersona)
    this.perServ.save(this.personaCrear).subscribe(data => { console.log(data) })
    console.log(this.personaCrear)
  }
  listarTipoPersona() {
    this.tipoPerServ.list().subscribe(data => {
      this.tipoPersona = data;
      console.log(this.tipoPersona)
    })
  }
}
