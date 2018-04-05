import { Injectable } from '@angular/core';
import { Question } from '../domain/question'
import { Quiz } from '../domain/quiz'
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';
 
@Injectable()
export class QuizProvider {
 
    constructor(private http: HttpClient) {
 
    }

    get():Promise<Quiz>{

        return new Promise(resolve => {
            this.http.get("https://raw.githubusercontent.com/kireistudio/football-quiz/master/src/data/quiz.json")
            .map(response => {

                debugger;
                let questions = [];

                for(let question of (response as any).questions){
                    let quizQuestion = new Question (question.image, question.answers,question.correctAnswer);

                    questions.push(quizQuestion);
                }

                return new Quiz(questions)
            })
            .subscribe(data => {
                resolve(data);
            }, err => {
                console.log(err);
            });
        });
    }
 
}