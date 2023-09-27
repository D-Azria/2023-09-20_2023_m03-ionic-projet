import { Component, OnInit } from '@angular/core';
import {Session} from "../../shared/models/session";
import {HeaderService} from "../../shared/services/header.service";
import {HttpService} from "../../shared/services/http.service";

@Component({
  selector: 'app-speakers',
  templateUrl: './speakers.component.html',
  styleUrls: ['./speakers.component.scss'],
})
export class SpeakersComponent  implements OnInit {

  title: string = "Speakers";
  constructor(private _headerService: HeaderService,
              private _fetchService: HttpService) { }

  ngOnInit() {
    this._headerService.updateHeaderTitle(this.title);
  }


}
