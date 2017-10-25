import { Component, Input, Output, EventEmitter } from '@angular/core';
import { users } from './users';
import { Sorted } from './sorted';

@Component({
    selector: 'app-child',
    template: `
    <h1></h1>
        <h3>User Data</h3>

        <table>
            <tbody>
                <tr *ngFor="let i of userdata"  [ngClass]="{hide: i.gender === usertype }">
                    <td>{{i.id}}</td>
                    <td>{{i.name}}</td>
                    <td>{{i.gender}}</td>
                </tr>
            </tbody>
        </table>

 
    `,
    styles: [`
    .hide{
        display:none;
    }
    `]
})

export class ChildComponent {
    userdata = users;
    @Input() usertype  = '';
    @Output() updateUser = new EventEmitter<Sorted>();

    SortedUsers = new Sorted();

    constructor() {

    }
}
