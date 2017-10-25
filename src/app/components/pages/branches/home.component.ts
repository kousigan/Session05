import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import {Student} from './student';

@Component({
 selector: 'app-pages-home',
    template: `
    <h1>{{title}}</h1>

    <person-app (updateEmployee) ="saveData($event)"  [student] ="studentObj"> </person-app>

    <p>{{studentObj.fname + ' '+ studentObj.lname}} </p>

    <p>{{fullName}}</p>
    `,
    styles: [``]
})
export class HomeComponent implements OnInit {

    title = 'Update Person';
    fullName = '';
    studentObj = new Student(540, 'Kousigan', 'Moni');
    saveData(emp) {
        this.fullName = emp.fname + ' ' + emp.lname ;
    }

    ngOnInit() {

    }
}
