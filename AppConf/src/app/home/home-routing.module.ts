import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './home.page';
import {SessionsComponent} from "../components/sessions/sessions.component";
import {SpeakersComponent} from "../components/speakers/speakers.component";
import {SessionDetailsComponent} from "../components/sessions/session-details/session.details.component";
import {SpeakerDetailsComponent} from "../components/speakers/speakerdetails/speakerdetails.component";
import {SessionNoteComponent} from "../components/sessions/session-note/session-note.component";

const routes: Routes = [
  {path: '', component: HomePage, children: []},
  {path:'sessions', children: [
      {path: '', component: SessionsComponent},
      {path: ':id', component: SessionDetailsComponent},
      {path: 'note/:id', component: SessionNoteComponent}
    ]},
  {path:'speakers', children: [
      {path: '', component: SpeakersComponent},
      {path: ':id', component: SpeakerDetailsComponent}
    ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomePageRoutingModule {}
