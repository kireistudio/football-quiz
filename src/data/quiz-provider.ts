import { Injectable } from '@angular/core';
//import { Question } from '../domain/question'
//import { Quiz } from '../domain/quiz'
 
@Injectable()
export class QuizProvider {
 
    constructor() {
 
    }
 
    someFunction(){
        console.log("I do something useful!");
    }

    // damelo(){
    //     // var questions = [];
    //     // var question1 = new Question (
    //     // 'https://dummyimage.com/800x600/000/fff?text=UNO', 
    //     // ['one', 'two', 'three']
    //     // ,'one');

    //     // var question2 = new Question (
    //     // 'https://dummyimage.com/800x600/000/fff?text=DOS', 
    //     // ['aaa', 'bbb', 'ccc']
    //     // ,'bbb');

    //     // var question3 = new Question (
    //     // 'https://dummyimage.com/800x600/000/fff?text=TRES', 
    //     // ['xxxxx', 'zzzzz', 'wwwww']
    //     // ,'xxxxx');

    //     // questions.push(question1);
    //     // questions.push(question2);
    //     // questions.push(question3);

    //     // return new Quiz(questions);
        
    // }
 
}