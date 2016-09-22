import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HomeTabPage } from '../home-tab/home-tab';
import { ContatosTabPage } from '../contatos-tab/contatos-tab';

@Component({
  templateUrl: 'build/pages/tab-test/tab-test.html',
})
export class TabTestPage {

  homeTab: any = HomeTabPage;
  contatosTab: any = ContatosTabPage;

  constructor(private navCtrl: NavController) {

  }

  

}
