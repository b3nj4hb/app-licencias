import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { PantallaPresentacionComponent } from './pantalla-presentacion/pantalla-presentacion.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'login', component: LoginComponent }
]

@NgModule({
  declarations: [
    LoginComponent,
    PantallaPresentacionComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    RouterModule.forRoot(routes)
  ]
})
export class CoreModule { }
