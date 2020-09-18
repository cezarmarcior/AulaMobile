import { Injectable } from '@angular/core';
import { AlertController, ToastController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class ToolsService {

  constructor(
    private alertCtrl: AlertController,
    private toastControl: ToastController
    ) { }

  msgShow(titulo, mensagem) {
    this.alertCtrl.create(
      {
        header: titulo,
        message: mensagem,
        buttons: [{ text: 'Ok', role: 'cancel' }]
      }
    ).catch().then(alertX => {
      alertX.present();
    });
  }

  async msgToast(mensagem) {
    console.log('Teste Toast');
    const toast = await this.toastControl.create(
      {
        duration: 3000,
        message: mensagem,

        color: 'danger',

        position: 'top',

        buttons: [
          {
            text: 'Close'
          }
        ]

      }
    );
    await toast.present();
  }

}
