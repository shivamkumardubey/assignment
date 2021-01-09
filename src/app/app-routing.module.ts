import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { from } from 'rxjs';
import {TopratedComponent} from './toprated/toprated.component';
import{UpcommingComponent} from './upcomming/upcomming.component';
import{LandingpageComponent} from './landingpage/landingpage.component';

const routes: Routes = [
  {path:'',component:LandingpageComponent},
  {path:'top-rated',component:TopratedComponent},
  {path:'up-comming',component:UpcommingComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
