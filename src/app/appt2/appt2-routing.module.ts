import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Appt2Page } from './appt2.page';

const routes: Routes = [
  {
    path: '',
    component: Appt2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Appt2PageRoutingModule {}
