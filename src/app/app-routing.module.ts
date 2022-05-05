import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EjemploComponent } from './core/presentation/ejemplo/ejemplo.component';

const routes: Routes = [
  {path:'',component: EjemploComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
