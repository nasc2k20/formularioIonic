import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PersonsPageRoutingModule } from './persons-routing.module';

import { PersonsPage } from './persons.page';

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    PersonsPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [PersonsPage]
})
export class PersonsPageModule {}
