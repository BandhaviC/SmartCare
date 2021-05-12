import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FirstavailablePageRoutingModule } from './firstavailable-routing.module';

import { FirstavailablePage } from './firstavailable.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FirstavailablePageRoutingModule
  ],
  declarations: [FirstavailablePage]
})
export class FirstavailablePageModule {}
