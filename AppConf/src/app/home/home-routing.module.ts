import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './home.page';
import {SessionsComponent} from "../components/sessions/sessions.component";
import {SpeakersComponent} from "../components/speakers/speakers.component";
import {SessionDetailsComponent} from "../components/sessions/sessiondetails/session.details.component";

const routes: Routes = [
  {path: '', component: HomePage, children: []},
  {path:'sessions', component: SessionsComponent, children: [
      {path: ':id', component: SessionDetailsComponent}
    ]},
  {path:'speakers', component: SpeakersComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomePageRoutingModule {}
