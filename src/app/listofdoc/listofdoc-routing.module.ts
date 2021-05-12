import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListofdocPage } from './listofdoc.page';

const routes: Routes = [
  {
    path: '',
    component: ListofdocPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListofdocPageRoutingModule {}
