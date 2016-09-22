import { Component } from '@angular/core';
import { NavController, ToastController } from 'ionic-angular';

/*
  Generated class for the ToastTestPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  templateUrl: 'build/pages/toast-test/toast-test.html',
})
export class ToastTestPage {

  constructor(private navCtrl: NavController, private toastCtrl: ToastController) {

  }

  showToast() {
    let toast = this.toastCtrl.create({
      message: "Olá, este é um toast!",
      duration: 3000,
      closeButtonText: "X",
      showCloseButton: true,
      position: "top"
    });
    let t2 = this.toastCtrl.create({
      message: "Toast fechado",
      duration: 2000,
      closeButtonText: "X",
      showCloseButton: true,
      position: "bottom"
    });

    toast.present();
    
    toast.onDidDismiss(() => {
      t2.present();
    });

  }

}
