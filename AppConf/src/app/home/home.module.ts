import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';

import { HomePageRoutingModule } from './home-routing.module';
import {MenuComponent} from "../components/menu/menu.component";
import {HeaderComponent} from "../components/header/header.component";


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule
  ],
  exports: [
    MenuComponent,
    HomePage,
    HeaderComponent
  ],
  declarations: [HomePage, MenuComponent, HeaderComponent]
})
export class HomePageModule {}
