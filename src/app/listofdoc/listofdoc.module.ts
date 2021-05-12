import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListofdocPageRoutingModule } from './listofdoc-routing.module';

import { ListofdocPage } from './listofdoc.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListofdocPageRoutingModule
  ],
  declarations: [ListofdocPage]
})
export class ListofdocPageModule {}
