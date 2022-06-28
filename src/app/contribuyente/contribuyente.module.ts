import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContribuyenteRoutingModule } from './contribuyente-routing.module';
import { RegistroComponent } from './registro/registro.component';
import { AnexosComponent } from './anexos/anexos.component';
import { PagosComponent } from './pagos/pagos.component';
import { ExpedienteComponent } from './expediente/expediente.component';
import { ComponentsModule } from '../components/components.module';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    RegistroComponent,
    AnexosComponent,
    PagosComponent,
    ExpedienteComponent
  ],
  imports: [
    CommonModule,
    ContribuyenteRoutingModule,
    ComponentsModule,
    FormsModule
  ]
})
export class ContribuyenteModule { }
