import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Question } from '../../domain/question';
import { Quiz } from '../../domain/quiz';
import { QuizProvider } from '../../data/quiz-provider';
 
@Component({
  selector: 'page-game',
  templateUrl: 'game.html'
})
export class GamePage {

  quiz: Quiz;

  constructor(public navCtrl: NavController, public quizProvider: QuizProvider) {
    this.quizProvider.get()
    .then(result => {
        this.quiz = result;
    });
  }

  answerSelected(answer){
    
    this.quiz.currentQuestion.answer(answer);

    setTimeout( () => {

      alert(this.quiz.currentQuestion.isCorrect(answer));
      this.quiz.answerCurrentQuestion(answer);
    
      if(this.quiz.isFinished) {
        alert(this.quiz.selectedAnswers);
      }

     }, 3000 );
  }
}
