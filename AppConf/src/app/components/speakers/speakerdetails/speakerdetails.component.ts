import { Component, OnInit } from '@angular/core';
import {Speaker} from "../../../shared/models/speaker";
import {ActivatedRoute, Router} from "@angular/router";
import {HttpService} from "../../../shared/services/http.service";
import {HeaderService} from "../../../shared/services/header.service";
import {SpeakerService} from "../../../shared/services/speaker.service";
import {Badge} from "../../../shared/models/badge";
import {Social} from "../../../shared/models/social";
import {Session} from "../../../shared/models/session";
import {SessionService} from "../../../shared/services/session.service";

@Component({
  selector: 'app-speakerdetails',
  templateUrl: './speakerdetails.component.html',
  styleUrls: ['./speakerdetails.component.scss'],
})
export class SpeakerDetailsComponent  implements OnInit {

  baseImgUrl: string = "";
  speaker: Speaker = {};
  sessions: Session[]=[];
  badges: Badge[]=[];
  socials: Social[] = [];
  title: string = "";
  constructor(private _router: Router,
              private _route: ActivatedRoute,
              private _httpService: HttpService,
              private _headerService: HeaderService,
              private _sessionService: SessionService,
              private _speakernService: SpeakerService) { }

  ngOnInit() {
    this._speakernService.$currentSpeaker.subscribe(data => {
      this.speaker = data;
      this.title = `Speaker: ${this.speaker.name}`;
      if(this.speaker.socials){
        this.speaker.socials.forEach(social => {
          if (social.name === "Website") {
            social.icon = "globe-outline";
          }
          this.socials.push(social);
        });
      }
      if(this.speaker.badges){
        this.speaker.badges.forEach(badges =>{
          this.badges.push(badges);
        });
      }
      this._headerService.updateHeaderTitle(this.title);
      if(this.speaker.id){
        this._httpService.getSessionsOfSpeaker(this.speaker.id).subscribe(data => {
          console.log(data)
          this.sessions = data;
          console.log("Sessions du speaker : ", this.sessions);
        });
      }

    });
    this.baseImgUrl = this._httpService.baseImgUrl;
  }

  goToSession(session: Session) {
    this._sessionService.updateCurrentSession(session);
    this._router.navigateByUrl(`/sessions/${session.id}`);
  }
}
