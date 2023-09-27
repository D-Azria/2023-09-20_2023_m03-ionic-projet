import { Component, OnInit } from '@angular/core';
import {Session} from "../../../shared/models/session";

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss'],
})
export class DetailsComponent  implements OnInit {

  baseImgUrl: string = "";
  session: Session = {};
  constructor() { }

  ngOnInit() {}



/*  const cardHtml: any = `
                <ion-card id="${this.session.id}">
                    <img alt="" src="${this.baseImgUrl}+${session.image}" />
                    <ion-card-header>
                        <ion-card-title>${session.title}</ion-card-title>
                        <ion-card-subtitle>${session.titleMobile}</ion-card-subtitle>
                    </ion-card-header>
                    <ion-card-content>
                        ${session.description}
                    </ion-card-content>

                    <ion-row class="social-icons-row">
                        <ion-col size="auto" class="social-icon-col">
                            <ion-icon name="heart-outline" aria-label="Like"></ion-icon>
                        </ion-col>
                        <ion-col size="auto" class="social-icon-col">
                             <ion-icon name="share-social-outline" aria-label="Share"></ion-icon>
                        </ion-col>
                    </ion-row>

                </ion-card>
        `;*/

}
