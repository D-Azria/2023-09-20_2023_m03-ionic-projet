import {BehaviorSubject} from "rxjs";
import {Injectable, OnInit} from "@angular/core";
import {HttpService} from "./http.service";
import {Session} from "../models/session";

@Injectable({
  providedIn: 'root',
})
export class SessionService implements OnInit  {

  allSessions:Session[] =[];

  allSessionsSource = new BehaviorSubject<Session[]>([]);
  $allSessions = this.allSessionsSource.asObservable();


  constructor(private _httpService: HttpService) {
  }

  ngOnInit() {
    this._httpService.getSessions().subscribe(data => {
      this.updateAllSessions(data);
    })
  }

  updateAllSessions(data: Session[]){
    this.allSessionsSource.next(data);
  }
}
