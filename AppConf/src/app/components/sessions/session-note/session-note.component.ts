import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {HttpService} from "../../../shared/services/http.service";
import {HeaderService} from "../../../shared/services/header.service";
import {SessionService} from "../../../shared/services/session.service";
import {SpeakerService} from "../../../shared/services/speaker.service";
import {Session} from "../../../shared/models/session";

@Component({
  selector: 'app-sessionnote',
  templateUrl: './session-note.component.html',
  styleUrls: ['./session-note.component.scss'],
})
export class SessionNoteComponent implements OnInit {

  title: string = "Notes de la conférence";
  session: Session = {};

  constructor(private _router: Router,
              private _route: ActivatedRoute,
              private _httpService: HttpService,
              private _headerService: HeaderService,
              private _sessionService: SessionService,
              private _speakerService: SpeakerService) { }

  ngOnInit() {
    this._sessionService.$currentSession.subscribe(data => {
      this.session = data;
      this.title = `Notes de la session: ${this.session.title}`;
      this._headerService.updateHeaderTitle(this.title);
    });
  }
}
