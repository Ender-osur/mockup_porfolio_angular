import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { LoginComponent } from './components/login/login.component';
import { PagenotfoundComponent } from './components/pagenotfound/pagenotfound.component';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { BodyDashComponent } from './components/dash/body-dash/body-dash.component';
import { WelcomeDashComponent } from './components/dash/welcome-dash/welcome-dash.component';
import { SettingsComponent } from './components/settings/settings.component';

export const routes: Routes = [
  { path: 'home', component: WelcomeComponent },
  { path: 'login', component: LoginComponent },
  {
    path: 'dash',
    component: BodyDashComponent,
    children: [
      { path: 'board', component: WelcomeDashComponent },
      { path: 'settings', component: SettingsComponent },
      { path: '', redirectTo: 'board', pathMatch: 'full' },
    ],
  },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '**', component: PagenotfoundComponent },
];

// @NgModule({
//   imports: [RouterModule.forRoot(routes)],
//   exports: [RouterModule],
// })
// export class AppRoutingModule {}
