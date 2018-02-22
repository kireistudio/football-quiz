import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Question } from '../../domain/question'
 
@Component({
  selector: 'page-game',
  templateUrl: 'game.html'
})
export class GamePage {

  question: Question;

  constructor(public navCtrl: NavController) {
    debugger;

    this.question = new Question (
      'https://dummyimage.com/800x600/000/fff?text=funciona', 
      ['one', 'two', 'three','one', 'two', 'three','one', 'two', 'three','one', 'two', 'three']
      ,'one');
  }

  answeSelected(answer){
    alert(this.question.isCorrect(answer));
  }

}
