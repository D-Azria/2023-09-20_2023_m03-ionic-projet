import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {map, Observable} from "rxjs";
import {Session} from "../models/session";

@Injectable({
  providedIn: 'root',
})
export class HttpService {


  baseImgUrl:string = "https://devfest2018.gdgnantes.com/";
  baseUrl: string = "https://devfest-nantes-2018-api.cleverapps.io/";

  baseSessionUrl:string = this.baseUrl+"sessions";
  baseSpeakerUrl:string = this.baseUrl+"speakers";


  constructor(private _http: HttpClient) {}

  getSessions():Observable<Session[]> {
     return this._http.get<Session[]>(this.baseSessionUrl).pipe(
       map(data => Object.values(data)));
  }

}
