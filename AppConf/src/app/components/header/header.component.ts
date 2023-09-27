import { Component, OnInit } from '@angular/core';
import {MenuService} from "../../shared/services/menu.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent  implements OnInit {

  constructor(private _menuService: MenuService) { }

  ngOnInit() {}

  changeCurrentPage(home: string) {
    this._menuService.updateCurrentPageSource(home);
  }
}
