import { Injectable } from '@angular/core';
import { Question } from '../domain/question'
import { Quiz } from '../domain/quiz'
import { HttpClient } from '@angular/common/http';
 
@Injectable()
export class QuizProvider {
 
    constructor(private http: HttpClient) {
 
    }

    get():Promise<Quiz>{

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

        return new Promise(resolve => {
            this.http.get<Quiz>("https://raw.githubusercontent.com/kireistudio/football-quiz/master/src/data/quiz.json")
            .subscribe(data => {
                resolve(new Quiz(questions));
                //resolve(data);
            }, err => {
                console.log(err);
            });
        });
    }
 
}