import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminRoutingModule } from './admin-routing.module';
import { ViewVoucherComponent } from './view-voucher/view-voucher.component';
import { ViewAnexosComponent } from './view-anexos/view-anexos.component';
import { ViewDecjuComponent } from './view-decju/view-decju.component';
import { ComponentsModule } from '../components/components.module';
import { ViewContribuyenteComponent } from './view-contribuyente/view-contribuyente.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ViewVoucherComponent,
    ViewAnexosComponent,
    ViewDecjuComponent,
    ViewContribuyenteComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    ComponentsModule,
    FormsModule,
  ]
})
export class AdminModule { }
