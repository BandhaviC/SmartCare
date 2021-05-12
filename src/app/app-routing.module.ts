import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'signup',
    loadChildren: () => import('./signup/signup.module').then( m => m.SignupPageModule)
  },
  {
    path: 'users',
    loadChildren: () => import('./users/users.module').then( m => m.UsersPageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'basicinfo',
    loadChildren: () => import('./basicinfo/basicinfo.module').then( m => m.BasicinfoPageModule)
  },
  {
    path: 'profile',
    loadChildren: () => import('./profile/profile.module').then( m => m.ProfilePageModule)
  },
  {
    path: 'visit',
    loadChildren: () => import('./visit/visit.module').then( m => m.VisitPageModule)
  },
  {
    path: 'listofdoc',
    loadChildren: () => import('./listofdoc/listofdoc.module').then( m => m.ListofdocPageModule)
  },
  {
    path: 'appt',
    loadChildren: () => import('./appt/appt.module').then( m => m.ApptPageModule)
  },
  {
    path: 'firstavailable',
    loadChildren: () => import('./firstavailable/firstavailable.module').then( m => m.FirstavailablePageModule)
  },
  {
    path: 'appt2',
    loadChildren: () => import('./appt2/appt2.module').then( m => m.Appt2PageModule)
  },
  
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
