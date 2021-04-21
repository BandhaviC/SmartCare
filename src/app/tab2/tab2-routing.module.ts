import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Tab2Page } from './tab2.page';

const routes: Routes = [
  {
    path: '',
    component: Tab2Page,
  },
  {
    path: 'getcare2',
    loadChildren: () => import('./getcare2/getcare2.module').then( m => m.Getcare2PageModule)
  },
  {
    path: 'getcare3',
    loadChildren: () => import('./getcare3/getcare3.module').then( m => m.Getcare3PageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Tab2PageRoutingModule {}
