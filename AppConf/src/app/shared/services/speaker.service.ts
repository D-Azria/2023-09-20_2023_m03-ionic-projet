import {Injectable, OnInit} from "@angular/core";
import {HttpService} from "./http.service";
import {BehaviorSubject} from "rxjs";
import {Speaker} from "../models/speaker";

@Injectable({
  providedIn: 'root',
})
export class SpeakerService implements OnInit{

  allSpeakersSource = new BehaviorSubject<Speaker[]>([])
  currentSpeakerSource = new BehaviorSubject<Speaker>({})
  $allSpeakers = this.allSpeakersSource.asObservable();
  $currentSpeaker = this.currentSpeakerSource.asObservable();

  constructor(private _httpService: HttpService) {
  }


  ngOnInit(): void {
    this._httpService.getSpeakers().subscribe(data => {
      this.updateAllSpeakers(data);
    })
  }

  updateAllSpeakers(data: Speaker[]){
    this.allSpeakersSource.next(data);
  }

  updateCurrentSpeaker(data: Speaker){
    this.currentSpeakerSource.next(data);
  }

}
