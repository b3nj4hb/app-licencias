import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { PantallaPresentacionComponent } from './pantalla-presentacion/pantalla-presentacion.component';
import { RouterModule, Routes } from '@angular/router';
import { ComponentsModule } from '../components/components.module';
import { FormsModule } from '@angular/forms';

const routes: Routes = [
  { path: 'login', component: LoginComponent }
]

@NgModule({
  declarations: [
    LoginComponent,
    PantallaPresentacionComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    RouterModule.forRoot(routes),
    ComponentsModule,
    FormsModule
  ]
})
export class CoreModule { }
