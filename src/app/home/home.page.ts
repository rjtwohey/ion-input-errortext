import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonIcon , IonInput, IonItem, IonList} from '@ionic/angular/standalone';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, IonIcon, IonInput, IonItem, IonList, FormsModule],
})
export class HomePage {
  email: string = '';
  // ...existing code...
  constructor() {
   
  }

}
