import { Component, OnInit } from '@angular/core';
import { persona } from 'src/app/classes/persona';
import { personaService } from 'src/app/services/contribuyente.service';

@Component({
  selector: 'app-view-contribuyente',
  templateUrl: './view-contribuyente.component.html',
  styleUrls: ['./view-contribuyente.component.css']
})
export class ViewContribuyenteComponent implements OnInit {
  persona: persona[] = [];
  constructor(private perService: personaService) { }

  ngOnInit(): void {
    this.listarPersona();
  }
  listarPersona() {
    this.perService.getPersonas().subscribe(data => {
      this.persona = data;
      console.log(this.persona)
    })
  }
}
