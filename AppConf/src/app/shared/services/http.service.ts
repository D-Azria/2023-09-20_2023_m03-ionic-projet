import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {catchError, forkJoin, map, Observable, of, throwError} from "rxjs";
import {Session} from "../models/session";
import {Speaker} from "../models/speaker";

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

  getSessionById(id: number): Observable<Session> {
    return this._http.get<{ [key: string]: Session }>(this.baseSessionUrl).pipe(
      map(sessions => {
        const session = sessions[String(id)];
        if (!session) {
          throw new Error(`Session with id ${id} not found.`);
        }
        return session;
      }),
      catchError(err => throwError(err))
    );
  }

  getSpeakers() {
    return this._http.get<Speaker[]>(this.baseSpeakerUrl).pipe(
      map(data => Object.values(data)));
  }

  getSpeakerById(id: number){
    return this._http.get<{ [key: string]: Speaker }>(this.baseSpeakerUrl).pipe(
      map(speakers => {
        const speaker = speakers[String(id)];
        if (!speaker) {
          throw new Error(`Speaker with id ${id} not found.`);
        }
        return speaker;
      }),
      catchError(err => throwError(err))
    );
  }

  getSessionsOfSpeaker(id: number):Observable<Session[]>{
    return this._http.get<Session[]>(this.baseSessionUrl).pipe(
      map(sessions =>
        Object.values(sessions).filter(session =>
          session.speakers?.includes(Number(id))
        )
      )
    );
  }

  getSpeakersofSession(session: Session): Observable<Speaker[]> {
    if (!session.speakers) {
      return of([]);
    }

    return this._http.get<{ [key: string]: Speaker }>(this.baseSpeakerUrl).pipe(
      map(allSpeakers =>
        session.speakers!.map(speakerId => allSpeakers[String(speakerId)])
      )
    );
  }
}
