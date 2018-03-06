import { Question } from "./question";
export class Quiz {

  private _questions: Question[];
  private _currentQuestion: Question;
  private _selectedAnswers: boolean[];
  private _isFinished: boolean;


  constructor(questions) {
    this._questions = questions;
    this._currentQuestion = questions[0];
    this._selectedAnswers = [];
  }

  get questions(): Question[] {
    return this._questions;
  }

  get currentQuestion(): Question {
    return this._currentQuestion;
  }

  get selectedAnswers(): boolean[] {
    return this._selectedAnswers;
  }

  get isFinished(): boolean {
    return this._selectedAnswers.length >= this._questions.length;
  }

  answerCurrentQuestion(value) {
    this._selectedAnswers.push(this._currentQuestion.isCorrect(value));
    if(!this.isFinished){
      var currentIndex = this._questions.indexOf(this._currentQuestion);
      this._currentQuestion = this._questions[currentIndex + 1];
    }
  }

}