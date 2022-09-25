import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetalleDatosPage } from './detalle-datos.page';

const routes: Routes = [
  {
    path: '',
    component: DetalleDatosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetalleDatosPageRoutingModule {}
