import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Session} from "../models/session";

@Injectable({
  providedIn: 'root',
})
export class FetchService{


  baseImgUrl:string = "https://devfest2018.gdgnantes.com/";
  baseUrl: string = "https://devfest-nantes-2018-api.cleverapps.io/";

  baseSessionUrl:string = this.baseUrl+"sessions";
  baseSpeakerUrl:string = this.baseUrl+"speakers";


  constructor(private _http: HttpClient) {}

  getSessions():Observable<Session[]> {
    return this._http.get<Session[]>(this.baseSessionUrl);
  }

}
