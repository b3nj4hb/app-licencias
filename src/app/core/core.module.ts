import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { PantallaPresentacionComponent } from './pantalla-presentacion/pantalla-presentacion.component';


@NgModule({
  declarations: [
    LoginComponent,
    PantallaPresentacionComponent
  ],
  imports: [
    CommonModule
  ]
})
export class CoreModule { }
