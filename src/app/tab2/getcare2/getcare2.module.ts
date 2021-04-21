import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Getcare2PageRoutingModule } from './getcare2-routing.module';

import { Getcare2Page } from './getcare2.page';
import { Component } from '@angular/core'

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Getcare2PageRoutingModule
  ],
  declarations: [Getcare2Page]
})
@Component({
  selector: 'app-page-getcare2',
  templateUrl: 'getcare2.page.html',
  styleUrls: ['getcare2.page.scss']
})

export class Getcare2PageModule {
  
  
}
