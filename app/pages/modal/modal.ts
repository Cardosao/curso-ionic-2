import { Component } from '@angular/core';
import { NavController, ModalController } from 'ionic-angular';
import { ModalLoginPage } from './../modal-login/modal-login';

@Component({
  templateUrl: 'build/pages/modal/modal.html',
})
export class ModalPage {

  constructor(private nav: NavController, private modalCtrl: ModalController) {

  }

  public openModal()  {
    let modal = this.modalCtrl.create(ModalLoginPage, {
      action: {
        act: 'login',
        render: true
      }
    });

    modal.onWillDismiss((param) => {
      console.log("DAdos : ", param);
    });

    modal.present();
  }

}
