import {Component, OnInit} from '@angular/core';
import {MenuService} from "../shared/services/menu.service";
import {HttpService} from "../shared/services/http.service";
import {Session} from "../shared/models/session";
import {Subject, takeUntil} from "rxjs";
import {HeaderService} from "../shared/services/header.service";

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{

  title: string = "Conférence";
  baseImgUrl: string = "";


  firstCard: Session = {}

  private destroy$ = new Subject<void>();
  constructor(private _headerService: HeaderService,
              private _fetchService: HttpService) {}

  ngOnInit(): void {
    this._headerService.updateHeaderTitle(this.title);
    this._fetchService.getSessions()
      .pipe(takeUntil(this.destroy$))
      .subscribe(data => {
          this.firstCard = data[101];
        }
      );
    this.baseImgUrl = this._fetchService.baseImgUrl;
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }

}
