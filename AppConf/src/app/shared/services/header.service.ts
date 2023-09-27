import {BehaviorSubject} from "rxjs";
import {Injectable} from "@angular/core";

@Injectable({
  providedIn: 'root',
})
export class HeaderService {
  title:string = "Conférence";

  headerTitleSource = new BehaviorSubject<string>("");
  $headerTitle = this.headerTitleSource.asObservable();

  setTitle(title:string){
    this.title = title;
  }

  updateHeaderTitle(title:string){
    this.headerTitleSource.next(title);
  }
}
