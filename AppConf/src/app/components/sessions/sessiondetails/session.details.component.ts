import { Component, OnInit } from '@angular/core';
import {Session} from "../../../shared/models/session";
import {ActivatedRoute} from "@angular/router";
import {HeaderService} from "../../../shared/services/header.service";

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
              private _headerService: HeaderService) { }

  ngOnInit() {
    this._headerService.updateHeaderTitle(this.title);
    this._route.params.subscribe(params => {
      const sessionId = params['id'];
      // Maintenant, utilisez cet ID pour charger les détails de la session ou effectuer d'autres actions.
    });
  }

  ngOnDestroy(){

  }

}
