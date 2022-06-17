import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EjemploComponent } from './presentation/ejemplo/ejemplo.component';
import { LoginComponent } from './login/login.component';



@NgModule({
  declarations: [
    EjemploComponent,
    LoginComponent
  ],
  imports: [
    CommonModule
  ]
})
export class CoreModule { }
