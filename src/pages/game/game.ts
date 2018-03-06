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

    //this.quiz = quizProvider.damelo();

    var questions = [];
        var question1 = new Question (
        'https://dummyimage.com/800x600/000/fff?text=UNO', 
        ['one', 'two', 'three']
        ,'one');

        var question2 = new Question (
        'https://dummyimage.com/800x600/000/fff?text=DOS', 
        ['aaa', 'bbb', 'ccc']
        ,'bbb');

        var question3 = new Question (
        'https://dummyimage.com/800x600/000/fff?text=TRES', 
        ['xxxxx', 'zzzzz', 'wwwww']
        ,'xxxxx');

        questions.push(question1);
        questions.push(question2);
        questions.push(question3);

      this.quiz = new Quiz(questions);
  }

  answerSelected(answer){
    alert(this.quiz.currentQuestion.isCorrect(answer));
    this.quiz.answerCurrentQuestion(answer);

    if(this.quiz.isFinished) {
      alert(this.quiz.selectedAnswers);
    }
  }

}
