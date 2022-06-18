import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AnexosComponent } from './anexos/anexos.component';
import { ExpedienteComponent } from './expediente/expediente.component';
import { PagosComponent } from './pagos/pagos.component';
import { RegistroComponent } from './registro/registro.component';

const routes: Routes = [
  {path: 'expendiente', component: ExpedienteComponent},
  {path: 'pagos', component: PagosComponent},
  {path: 'registro', component: RegistroComponent},
  {path: 'anexos', component: AnexosComponent},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContribuyenteRoutingModule { }
