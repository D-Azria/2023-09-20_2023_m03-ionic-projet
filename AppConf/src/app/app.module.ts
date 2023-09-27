import {LOCALE_ID, NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import {HomePageModule} from "./home/home.module";
import {SessionsComponent} from "./components/sessions/sessions.component";
import {SpeakersComponent} from "./components/speakers/speakers.component";
import {registerLocaleData} from "@angular/common";
import * as fr from '@angular/common/locales/fr';

@NgModule({
  declarations: [AppComponent, SessionsComponent, SpeakersComponent],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, HomePageModule, HttpClientModule],
  providers: [{provide: RouteReuseStrategy, useClass: IonicRouteStrategy}, { provide: LOCALE_ID, useValue: 'fr-FR'}],
  bootstrap: [AppComponent],
  exports: [
    AppComponent
  ]
})
export class AppModule {
  constructor(){
    registerLocaleData(fr.default);
  }
}
