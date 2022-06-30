import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ViewAnexosComponent } from './view-anexos/view-anexos.component';
import { ViewContribuyenteComponent } from './view-contribuyente/view-contribuyente.component';
import { ViewDecjuComponent } from './view-decju/view-decju.component';
import { ViewVoucherComponent } from './view-voucher/view-voucher.component';

const routes: Routes = [
  {path: 'view-voucher', component: ViewVoucherComponent},
  {path: 'view-decju', component: ViewDecjuComponent},
  {path: 'view-anexos', component: ViewAnexosComponent},
  {path: 'view-contribuyente', component: ViewContribuyenteComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
