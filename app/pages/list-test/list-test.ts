import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';


@Component({
  templateUrl: 'build/pages/list-test/list-test.html',
})
export class ListTestPage {

  personagens: Array<any>;

  persons: Array<Personagem>;

  constructor(private navCtrl: NavController) {
    this.persons = [
      new Personagem("Han", './../../img/earth.jpg', "Atirador de elite"),
      new Personagem("Luke", './../../img/earth.jpg', "Jedi"),
      new Personagem("Obiwan", './../../img/earth.jpg', "Mestre Jedi")
    ]
    this.personagens = [
      {
       nome: 'Han Solo',
       img: './../../img/earth.jpg',
       desc: 'piloto'
     },{
       nome: 'Luke Skywalker',
       img: './../../img/earth.jpg',
       desc: 'jedi'
     },{
       nome: 'Anakin Skywalker',
       img: './../../img/earth.jpg',
       desc: 'jedi'
     }
     ];

  }



}

export class Personagem {

nomeStr: string;
imgStr: string;
descStr: string;

constructor(public nome: string, public img: string, public desc: string) {}

}
