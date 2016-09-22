import { Component } from '@angular/core';
import { NavController, ViewController, NavParams } from 'ionic-angular';

/*
  Generated class for the ModalLoginPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  templateUrl: 'build/pages/modal-login/modal-login.html',
})
export class ModalLoginPage {

  constructor(private navCtrl: NavController, private viewCtrl: ViewController, public param: NavParams) {
    console.info("Form renderizado: ", param.get("action"));
  }

  user: any = {
    login: "",
    pass: ""
  }

  public logar() {
    this.viewCtrl.dismiss(this.user);
  }

  public close() {
    this.viewCtrl.dismiss();
  }

}
