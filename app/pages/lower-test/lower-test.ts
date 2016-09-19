import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {ToLower} from '../../pipes/toLower';

/*
  Generated class for the LowerTestPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  templateUrl: 'build/pages/lower-test/lower-test.html',
  pipes: [ToLower]
})
export class LowerTestPage {

  constructor(private navCtrl: NavController) {

  }

}
