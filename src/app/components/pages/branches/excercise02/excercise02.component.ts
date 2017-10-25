import { Component } from '@angular/core';


@Component({
    selector: 'app-ex02',
    template: `
        <h1>Excercise 02</h1>
        <input type="radio" [(ngModel)]="gender" name="sex" value="all">All 
        <input type="radio" [(ngModel)]="gender" name="sex" value="female">Male 
        <input type="radio" [(ngModel)]="gender" name="sex" value="male">Female<br>
        <hr>
        <app-child [usertype]=gender  ></app-child>

    `
})

export class Exercise02Component {
    gender = 'male';

    constructor() {

    }
}
