import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { CardTestePage } from './../card-teste/card-teste';
import { IconTestePage } from './../icon-teste/icon-teste';
import { InputTestPage } from './../input-test/input-test';

@Component({
  templateUrl: 'build/pages/nav-test/nav-test.html',
})
export class NavTestPage {

  constructor(private navCtrl: NavController) {

  }

  openPage() {
    this.navCtrl.push(CardTestePage, {
      mensagem: "Mensagem da tela de navegação",
      params: {id: 42}
    });
  }

}
