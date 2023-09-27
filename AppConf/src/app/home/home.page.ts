import {Component, OnInit} from '@angular/core';
import {MenuService} from "../shared/services/menu.service";
import {FetchService} from "../shared/services/fetch.service";
import {Session} from "../shared/models/session";
import {Subject, takeUntil} from "rxjs";

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{

  title: string = "Conférence";
  baseImgUrl: string = "";

  allCards:{ [key: number]: Session } ={};
  firstCard: Session = {}

  private destroy$ = new Subject<void>();
  constructor(private _menuService: MenuService,
              private _fetchService: FetchService) {}

  ngOnInit(): void {
    this._menuService.updateCurrentPageSource(this.title);
    this._fetchService.getSessions()
      .pipe(takeUntil(this.destroy$))
      .subscribe(data => {
          this.firstCard = data[101];
          this.allCards = data;
          console.log(this.allCards);
        }
      );
    this.baseImgUrl = this._fetchService.baseImgUrl;
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }

}
