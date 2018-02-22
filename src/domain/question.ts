export class Question {

  private _image: string;
  private _answers: string[];
  private _correctAnswer: string;

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

  isCorrect(answer){
    return (answer === this._correctAnswer)
  }
}