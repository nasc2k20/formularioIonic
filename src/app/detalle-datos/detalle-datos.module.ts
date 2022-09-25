import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetalleDatosPageRoutingModule } from './detalle-datos-routing.module';

import { DetalleDatosPage } from './detalle-datos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetalleDatosPageRoutingModule
  ],
  declarations: [DetalleDatosPage]
})
export class DetalleDatosPageModule {}
