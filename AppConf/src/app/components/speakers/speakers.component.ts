import { Component, OnInit } from '@angular/core';
import {Session} from "../../shared/models/session";
import {HeaderService} from "../../shared/services/header.service";
import {HttpService} from "../../shared/services/http.service";
import {Router} from "@angular/router";
import {Speaker} from "../../shared/models/speaker";
import {SpeakerService} from "../../shared/services/speaker.service";

@Component({
  selector: 'app-speakers',
  templateUrl: './speakers.component.html',
  styleUrls: ['./speakers.component.scss'],
})
export class SpeakersComponent  implements OnInit {

  title: string = "Speakers";
  allSpeakers: Speaker[]= [];
  container = document.getElementById("container");
  constructor(private _headerService: HeaderService,
              private _speakerService: SpeakerService,
              private _httpService: HttpService,
              private _router: Router) { }

  ngOnInit() {
    this._headerService.updateHeaderTitle(this.title);
    this._httpService.getSpeakers().subscribe(data => {
      this._speakerService.updateAllSpeakers(data);
      this.allSpeakers = data;
    })
  }

  focusSpeaker(speaker: Speaker){
    this._speakerService.updateCurrentSpeaker(speaker);
    this._router.navigateByUrl(`speakers/${speaker.id}`);
  }

}
