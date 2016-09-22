import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  templateUrl: 'build/pages/card-teste/card-teste.html',
})
export class CardTestePage {

  constructor(private navCtrl: NavController, public param: NavParams) {
    console.info(this.param.get("mensagem"));
    console.info(this.param.get("params"));
  }

  voltar() {
    this.navCtrl.pop();
  }

}
