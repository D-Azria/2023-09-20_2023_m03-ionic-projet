import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './home.page';
import {SessionsComponent} from "../components/sessions/sessions.component";
import {SpeakersComponent} from "../components/speakers/speakers.component";

const routes: Routes = [
  {path: '', component: HomePage, children: []},
  {path:'sessions', component: SessionsComponent},
  {path:'speakers', component: SpeakersComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomePageRoutingModule {}
