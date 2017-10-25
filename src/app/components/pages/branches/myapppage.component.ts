import { Component, OnInit } from '@angular/core';

@Component({
 selector: 'app-myapppage',
    template: `
    <h1>Directives Example</h1>
    <button (click)="onlyodd = !onlyodd" > {{onlyodd ? "even":"odd" }} </button>
    <div *ngIf = " onlyodd " >
        <ul>
            <li *ngFor="let od of oddnum"  [ngClass]="{odd: od % 3 === 0 }">
                {{od}}
            </li>
        </ul>
    </div>
    <div *ngIf = " !onlyodd ">
        <ul>
            <li *ngFor="let ev of evennum" [ngStyle]="{'backgroundColor':bgColor,'border': '1px solid #333','margin-bottom' : '5px' }" >
            {{ev}}
        </li>
    </ul>
    </div>
    <div>
        <p  [basicDirective] = "bgColor" >Directive Example</p>
    </div>
    <hr>
    <h1> Directives Using Hostlistener</h1>
    <div>
        <button (click)="bgColor='red'">color 1</button>
        <button (click)="bgColor='blue'">color 2</button>
        <button (click)="bgColor='green'">color 3</button>
        <section [mybox]="bgColor" defaultColor="violet" >Applying new Color </section>
        <section [mybox]="'purple'" highlightColor="red"> Fixed Color </section>

    </div>
    `,
    styles: [`
        .odd{color:red }
        section{padding:30px;border:1px solid #ccc; margin-top:10px;}
        `]
})
export class MyapppageComponent  implements OnInit {
    bgColor  = '#999';
    onlyodd;
    color = 'blue';
    oddnum: number[] = [ 1, 3, 5, 7, 9, 11];
    evennum: number[] = [ 2, 4, 6];
    ngOnInit() {

    }
}
