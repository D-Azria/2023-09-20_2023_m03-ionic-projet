import { Component, OnInit } from '@angular/core';
import {HttpService} from "../../shared/services/http.service";
import {Session} from "../../shared/models/session";
import {HeaderService} from "../../shared/services/header.service";
import {SessionService} from "../../shared/services/session.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-sessions',
  templateUrl: './sessions.component.html',
  styleUrls: ['./sessions.component.scss'],
})
export class SessionsComponent  implements OnInit {

  title: string = "Sessions";
  baseImgUrl: string = "";
  allSessions:Session[] =[];
  container = document.getElementById("container");
  constructor(private _headerService: HeaderService,
              private _sessionService: SessionService,
              private _httpService: HttpService,
              private _router: Router) { }

  ngOnInit() {
    this._headerService.updateHeaderTitle(this.title);
    this._httpService.getSessions().subscribe(data => {
      this.allSessions = data;
      })
  }

  ngOnDestroy(){
  }

  focusSession(session: Session) {
    this._sessionService.updateCurrentSession(session);
    this._router.navigateByUrl(`/sessions/${session.id}`);
  }
}
