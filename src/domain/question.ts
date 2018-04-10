export class Question {

  private _image: string;
  private _answers: string[];
  private _correctAnswer: string;
  private _selectedAnswer: string;

  constructor(image, answers, correctAnswer) {
    this._image = image;
    this._answers = answers;
    this._correctAnswer = correctAnswer;
  }

  get image(): string {
    return this._image ;
  }

  get answers(): string[] {
    return this._answers ;
  }

  get correctAnswer(): string {
    return this._correctAnswer ;
  }

  answer(answer) {
    this._selectedAnswer = answer;
  }

  isCorrect(answer){
    return (answer === this._correctAnswer)
  }

  isSelected(answer){
    return (answer === this._selectedAnswer)
  }

}