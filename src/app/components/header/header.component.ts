import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  user: any;

  constructor() { }

  ngOnInit(): void {
    this.user = localStorage.getItem("user");
    console.log(this.user);
  }

  cerrarSesion() {
    localStorage.clear()
  }
}
