import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FirstavailablePage } from './firstavailable.page';

const routes: Routes = [
  {
    path: '',
    component: FirstavailablePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FirstavailablePageRoutingModule {}
