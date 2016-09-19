import { Component} from '@angular/core';
import { AlertController } from 'ionic-angular';

@Component({
  templateUrl: 'build/pages/alert/alert.html',
})
export class AlertPage {

  user: string = 'ninguém';

  constructor(private alertCtrl: AlertController) {
   }

  public showAlert() {
    let alerta =  this.alertCtrl.create({
      title: 'Alertas do Cardosao',
      buttons: ['Ok'],
      message: 'esta é uma mensagem de aviso'
    });
    alerta.present();

  }

  public showConfirm() {
    let alerta = this.alertCtrl.create({
      title: 'Alertas do Cardosao',
      buttons: [{
        text: 'Aceitar',
        role: 'ok',
        handler: () => {
          console.log('Aceito!');
        }
      },{
        text: 'Declinar',
        role: 'cancel',
        handler: (data) => {
          console.log('Não Aceito!');
        }
      }]
    });
    alerta.present();

  }

  public showPrompt() {
    let alerta = this.alertCtrl.create({
      title: 'Alertas do Cardosao',
      inputs:[{
          name: 'nome',
          placeholder: 'digite seu nome!',
          label: 'Nome: '
      }],
      buttons: [{
        text: 'Aceitar',
        role: 'ok',
        handler: (data) => {
          console.log('Aceito!');
        }
      },{
        text: 'Declinar',
        role: 'cancel',
        handler: (data) => {
          this.user = data.nome;

        }
      }]
    });
    alerta.present();

  }

}
