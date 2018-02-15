import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-game',
  templateUrl: 'game.html'
})
export class GamePage {

  answers = [ "uno", "dos", "tres" ];

  constructor(public navCtrl: NavController) {

  }

  answeSelected(answer){
    alert(answer);
  }

}
