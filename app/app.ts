import { Component } from '@angular/core';
import { ionicBootstrap, Platform } from 'ionic-angular';
import { StatusBar } from 'ionic-native';

import { HomePage } from './pages/home/home';
import { TestPage } from './pages/test/test';
import { LowerTestPage } from './pages/lower-test/lower-test';
import { AlertPage } from './pages/alert/alert';
import { ButtonTestePage } from './pages/button-teste/button-teste';
import { CardTestePage } from './pages/card-teste/card-teste';
import { IconTestePage } from './pages/icon-teste/icon-teste';
import { InputTestPage } from './pages/input-test/input-test';
import { ListTestPage } from './pages/list-test/list-test';
import { GridTestPage } from './pages/grid-test/grid-test';
import { ModalPage } from './pages/modal/modal';
import { NavTestPage } from './pages/nav-test/nav-test';
import { TabTestPage } from './pages/tab-test/tab-test';


@Component({
  templateUrl: 'build/app.html'
})

export class MyApp {

  home: any = HomePage;
  rootPage: any = this.home;
  test: any = TestPage;
  lower: any = LowerTestPage;
  alert: any = AlertPage;
  btTest: any = ButtonTestePage;
  cards:any = CardTestePage;
  icons: any = IconTestePage;
  inputs: any = InputTestPage;
  lists: any = ListTestPage;
  grids: any = GridTestPage;
  modals: any = ModalPage;
  navega: any = NavTestPage;
  abas: any = TabTestPage;


  constructor(public platform: Platform) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
    });
  }

  openPage(page) {
    this.rootPage = page;
  }

}

ionicBootstrap(MyApp);
