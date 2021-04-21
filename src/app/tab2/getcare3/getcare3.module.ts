import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Getcare3PageRoutingModule } from './getcare3-routing.module';

import { Getcare3Page } from './getcare3.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Getcare3PageRoutingModule
  ],
  declarations: [Getcare3Page]
})
export class Getcare3PageModule {}
