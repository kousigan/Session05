import { Component } from '@angular/core';

@Component({
    selector: 'app-directive',
       template: `<h1>Directive</h1>
       <button (click)=" newbg='blue'">one </button>
       <button (click)=" newbg='green'"> two</button>
       <button (click)="showcontent = !showcontent"> change event </button>

       <div [asidecolor]="newbg" myColor="red" > adding directive </div>


            <div *ngIf = "showcontent" [ngClass]="'odd , large'">
            showing content
            </div>
            <div *ngIf = "!showcontent" >
            showing alternate content
            </div>
            <section mysection> applying section directive</section>
       `,
       styles: [`
       .odd{
           color:red;
       }
       .large{
            font-size:20px;
       }
       .even{
        color:blue;
    }
    .larger{
        font-size:30px;
    }
       `]
   })

export class DirectiveComponent {
    newbg: string;
    onlyodd;
    showcontent;
    constructor() {}

}
