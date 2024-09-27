import { Component, OnInit } from '@angular/core';
import {MenuService} from "../../shared/services/menu.service";
import {HeaderService} from "../../shared/services/header.service";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent  implements OnInit {

  title: string = "Conférence";

  private _subscription = new Subscription();
  constructor(private _headerService: HeaderService) { }

  ngOnInit() {
    this._subscription.add(this._headerService.$headerTitle.subscribe(data =>{
      this.title = data;
    }))
  }


}
