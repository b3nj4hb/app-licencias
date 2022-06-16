import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EjemploComponent } from './core/presentation/ejemplo/ejemplo.component';
import { PantallaPresentacionComponent } from './pantalla-presentacion/views/pantalla-presentacion/pantalla-presentacion.component';

const routes: Routes = [
  {path:'',component: PantallaPresentacionComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
