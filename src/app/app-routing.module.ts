import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ComponentsModule } from './components/components.module';
import { PagosComponent } from './contribuyente/pagos/pagos.component';
import { CoreModule } from './core/core.module';
import { LoginComponent } from './core/login/login.component';
import { PantallaPresentacionComponent } from './core/pantalla-presentacion/pantalla-presentacion.component';


const routes: Routes = [
  { path: '', component: PantallaPresentacionComponent },
  { path: 'login', component: LoginComponent },

  { path: 'contribuyente', loadChildren: () => import('./contribuyente/contribuyente.module').then((m) => m.ContribuyenteModule) }

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    ComponentsModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
