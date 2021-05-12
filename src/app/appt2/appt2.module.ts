import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Appt2PageRoutingModule } from './appt2-routing.module';

import { Appt2Page } from './appt2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Appt2PageRoutingModule
  ],
  declarations: [Appt2Page]
})
export class Appt2PageModule {}
