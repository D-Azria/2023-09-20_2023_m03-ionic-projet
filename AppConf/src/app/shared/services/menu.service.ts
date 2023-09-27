import {BehaviorSubject} from "rxjs";
import {Injectable} from "@angular/core";

@Injectable({
  providedIn: 'root',
})
export class MenuService {
  currentPage: string = "home";


  currentPageSource = new BehaviorSubject<string>("");
  $currentPage = this.currentPageSource.asObservable();


  getCurrentPage(){
    return this.currentPage;
  }

  setCurrentPage(name : string){
    this.currentPage = name;
  }

  updateCurrentPageSource(name : string){
    this.currentPageSource.next(name);
  }

}


