import { Component, OnInit } from '@angular/core';
import { persona } from 'src/app/classes/classes';
import { personaService } from 'src/app/services/persona.service';

@Component({
  selector: 'app-view-contribuyente',
  templateUrl: './view-contribuyente.component.html',
  styleUrls: ['./view-contribuyente.component.css']
})
export class ViewContribuyenteComponent implements OnInit {
  persona: persona[] = [];
  personacrear = new persona;
  constructor(private perService: personaService) { }

  ngOnInit(): void {
    this.listarPersona();
  }
  listarPersona() {
    this.perService.list().subscribe(data => {
      this.persona = data;
      console.log(this.persona)
    })
  }
}
