import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {UserComponent} from './user/user.component';
import {LoginComponent} from './login/login.component';
import { DashComponent } from './dash/dash.component';
import { NavComponent } from './nav/nav.component';
import { AboutComponent } from './about/about.component';
import { TeamComponent } from './team/team.component';


const routes: Routes = [
  { path: 'user', component: UserComponent },
  { path: 'login', component: LoginComponent },
  { path: 'nav', component: NavComponent },
  {path : '', component : LoginComponent},
  { path: 'DASHBOARD', component: DashComponent },
  { path: 'ABOUT', component: AboutComponent },
  { path: 'TEAM', component: TeamComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
