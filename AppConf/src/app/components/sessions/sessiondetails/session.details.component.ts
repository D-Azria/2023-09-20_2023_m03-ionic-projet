import { Component, OnInit } from '@angular/core';
import {Session} from "../../../shared/models/session";
import {ActivatedRoute} from "@angular/router";
import {HeaderService} from "../../../shared/services/header.service";
import {SessionService} from "../../../shared/services/session.service";
import {HttpService} from "../../../shared/services/http.service";

@Component({
  selector: 'app-details',
  templateUrl: './session.details.component.html',
  styleUrls: ['./session.details.component.scss'],
})
export class SessionDetailsComponent  implements OnInit {

  title: string = "Détail de la session";
  baseImgUrl: string = "";
  session: Session = {};
  constructor(private _route: ActivatedRoute,
              private _httpService: HttpService,
              private _headerService: HeaderService,
              private _sessionService: SessionService) { }

  ngOnInit() {
    this._headerService.updateHeaderTitle(this.title);
    this.baseImgUrl = this._httpService.baseImgUrl;
    this._sessionService.$currentSession.subscribe(data => {
      console.log(data);
      this.session = data;
    })
    this._route.paramMap.subscribe(params => {
      console.log(params);
      console.log("ROUTE PARAMS");
    });
  }

  ngOnDestroy(){

  }

}
