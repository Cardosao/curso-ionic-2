import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { ApiConnect } from '../../providers/api-connect/api-connect';


/*
  Generated class for the TestPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  templateUrl: 'build/pages/test/test.html',
  providers: [ApiConnect]
})
export class TestPage {

  public people: any;

  constructor(private api: ApiConnect) {
    this.loadPeople();
  }

  loadPeople(){
  this.api.load()
  .then(data => {
    this.people = data;
  });
}

}
