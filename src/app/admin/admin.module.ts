import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { ViewVoucherComponent } from './view-voucher/view-voucher.component';
import { ViewAnexosComponent } from './view-anexos/view-anexos.component';
import { ViewDecjuComponent } from './view-decju/view-decju.component';


@NgModule({
  declarations: [
    ViewVoucherComponent,
    ViewAnexosComponent,
    ViewDecjuComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
