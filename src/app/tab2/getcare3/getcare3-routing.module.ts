import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Getcare3Page } from './getcare3.page';

const routes: Routes = [
  {
    path: '',
    component: Getcare3Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Getcare3PageRoutingModule {}
