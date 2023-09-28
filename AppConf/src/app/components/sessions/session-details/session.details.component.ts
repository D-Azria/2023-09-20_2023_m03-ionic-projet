import { Component, OnInit } from '@angular/core';
import {Session} from "../../../shared/models/session";
import {ActivatedRoute, Router} from "@angular/router";
import {HeaderService} from "../../../shared/services/header.service";
import {SessionService} from "../../../shared/services/session.service";
import {HttpService} from "../../../shared/services/http.service";
import {Speaker} from "../../../shared/models/speaker";
import {SpeakerService} from "../../../shared/services/speaker.service";
import {combineLatest, filter, map, of, Subscription, switchMap, tap} from "rxjs";

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

  private _subscription = new Subscription();
  constructor(private _router: Router,
              private _route: ActivatedRoute,
              private _httpService: HttpService,
              private _headerService: HeaderService,
              private _sessionService: SessionService,
              private _speakerService: SpeakerService) { }

/*  ngOnInit() {
    this.baseImgUrl = this._httpService.baseImgUrl;
    this._route.paramMap.subscribe(param => {
      console.log("PARAM", param.get('id'))
      const sessionId = param.get('id');
      if (sessionId !== null) {
        const idNumber = Number(sessionId);
        if (!isNaN(idNumber)) {
          this._httpService.getSessionById(idNumber).subscribe(data =>{
            this._sessionService.updateCurrentSession(data);
          });
        }
      }
      this._subscription.add(this._sessionService.$currentSession.subscribe(data => {
        this.session = data;
        if (this.session.speakers){
          this._httpService.getSpeakersofSession(this.session).subscribe(data =>{
            this.speakers = data;
          });
        }
        this.title = `Session: ${this.session.title}`;
        this._headerService.updateHeaderTitle(this.title);
      })
      );
    })
  }*/

  ngOnInit() {
    this.baseImgUrl = this._httpService.baseImgUrl;

    this._route.paramMap.pipe(
      map(param => param.get('id')),
      filter(sessionId => sessionId !== null),
      map(sessionId => Number(sessionId)),
      filter(idNumber => !isNaN(idNumber)),
      switchMap(idNumber => this._httpService.getSessionById(idNumber))
    ).subscribe(session => {
      this._sessionService.updateCurrentSession(session);
      this._sessionService.$currentSession.subscribe(session =>{
        this.session = session;
        this.title = `Session: ${session.title}`;
        this._headerService.updateHeaderTitle(this.title);
      })
      if (session.speakers) {
        this._httpService.getSpeakersofSession(session).subscribe(speakers => {
          this.speakers = speakers;
        });
      }
    });
  }


  ngOnDestroy(){
    this._subscription.unsubscribe();
  }

  goToSpeaker(speaker: Speaker) {
    this._speakerService.updateCurrentSpeaker(speaker);
    this._router.navigateByUrl(`speakers/${speaker.id}`);

  }

  goToSessions() {
    this._router.navigateByUrl(`sessions/`);
  }

  takeNote(session: Session) {
    this._router.navigateByUrl(`sessions/note/${session.id}`)
  }
}
