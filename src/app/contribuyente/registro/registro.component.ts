import { Component, OnInit } from '@angular/core';
import { persona } from 'src/app/classes/persona';
import { personaService } from 'src/app/services/contribuyente.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {
  personacrear = new persona;
  constructor(private perService: personaService) { }

  ngOnInit(): void {
  }
  crearPersona() {
    this.personacrear.idpersona = Number(this.personacrear.idpersona)
    this.perService.save(this.personacrear).subscribe(data => { console.log(data) })
    console.log(this.personacrear)
  }
}
