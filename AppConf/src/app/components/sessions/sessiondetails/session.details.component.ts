import { Component, OnInit } from '@angular/core';
import {Session} from "../../../shared/models/session";
import {ActivatedRoute, Router} from "@angular/router";
import {HeaderService} from "../../../shared/services/header.service";
import {SessionService} from "../../../shared/services/session.service";
import {HttpService} from "../../../shared/services/http.service";
import {Speaker} from "../../../shared/models/speaker";
import {SpeakerService} from "../../../shared/services/speaker.service";

@Component({
  selector: 'app-details',
  templateUrl: './session.details.component.html',
  styleUrls: ['./session.details.component.scss'],
})
export class SessionDetailsComponent  implements OnInit {

  title: string = "Détail de la session";
  baseImgUrl: string = "";
  session: Session = {};
  speakers: Speaker[]= [];

  constructor(private _router: Router,
              private _route: ActivatedRoute,
              private _httpService: HttpService,
              private _headerService: HeaderService,
              private _sessionService: SessionService,
              private _speakerService: SpeakerService) { }

  ngOnInit() {
    this.baseImgUrl = this._httpService.baseImgUrl;
    this._sessionService.$currentSession.subscribe(data => {
      this.session = data;
      if (this.session.speakers){
        this._httpService.getSpeakersofSession(this.session).subscribe(data =>{
          this.speakers = data;
        });
      }
      this.title = `Session: ${this.session.title}`;
      this._headerService.updateHeaderTitle(this.title);
    });
  }

  ngOnDestroy(){
  }

  goToSpeaker(speaker: Speaker) {
    this._speakerService.updateCurrentSpeaker(speaker);
    this._router.navigateByUrl(`speakers/${speaker.id}`);

  }

  goToSessions() {
    this._router.navigateByUrl(`sessions/`);
  }
}
