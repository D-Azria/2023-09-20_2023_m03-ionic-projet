import { Component, OnInit } from '@angular/core';
import {MenuService} from "../../shared/services/menu.service";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {

  currentPage: string = "home";


  private _subscription = new Subscription;
  constructor(private _navService: MenuService) { }

  ngOnInit() {
/*    this._subscription.add(this._navService.currentPageSource.subscribe(data => {
      this.currentPage = data;
    }))*/
  }

/*  changeCurrentPage(data:string){
    this._navService.updateCurrentPageSource(data);
    console.log(this.currentPage);
    this.ngOnInit();
  }*/

}
