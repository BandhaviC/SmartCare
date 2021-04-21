import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Getcare2Page } from './getcare2.page';

const routes: Routes = [
  {
    path: '',
    component: Getcare2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Getcare2PageRoutingModule {}
