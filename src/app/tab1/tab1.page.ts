import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
})
export class Tab1Page {
  constructor(public alertController: AlertController) {}

  async presentAlertConfirm() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Message text!!!',
      buttons: [
        {
          text: 'Cance',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            console.log('Confirm cancel: blah');
          },
        },
        {
          text: 'okey',
          handler: () => {
            console.log('Confirm okay');
          },
        },
      ],
    });

    await alert.present();
  }
}
