import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';
import { HomePage } from '../home/home';


@Component({
  templateUrl: 'build/pages/input-test/input-test.html',
})

export class InputTestPage {

  public home: any = HomePage;
  public login: string;
  public senha: string;

  constructor(private alertCtrl: AlertController, private navCtrl: NavController) {
  }

  public goToPage(page) {
    this.navCtrl.setRoot(page);
  }

  public showAlert() {
    let texto =  ('Login: ' + this.login + ", Senha:  " + this.senha);
    console.info(texto);
    let alerta =  this.alertCtrl.create({
      title: 'Alertas do Cardosao',
      buttons: ['OK'],
      message: texto
    });
    alerta.present();
  }

}
