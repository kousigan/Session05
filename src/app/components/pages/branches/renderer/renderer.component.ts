import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-renderer',
  template: `
    <h1>Structural Directives </h1>
  <button (click)="oddsection = !oddsection"> {{oddsection ? 'even':'odd'}}</button>
    <section *ngIf="!oddsection" [ngClass]="'even:false large'">
    even
    </section>
    <section *ngIf="!oddsection" [ngClass]="'odd'"> ngIf using template </section>
    <section *ngIf="oddsection" [ngClass]="'odd , larger'">
      <ul>
        <li *ngFor="let evennum of num" [ngClass]="{disp: evennum % 2 !== 0}">
        {{evennum}}
        </li>
      </ul>
    </section>

    <div mysection updateValue="20px" insertText="New text included">  structural Directive through Renderer</div>

    <div strucdir> Struc Directive</div>
    <h4>using Ng Switch </h4>
    <input type="radio" name="switch" id="option1"><label for="option1" (click)="radiooption='one'">option 1<label>
    <input type="radio" name="switch" id="option2"><label for="option2" (click)="radiooption='two'">option 2<label>
    <input type="radio" name="switch" id="option3"><label for="option3" (click)="radiooption='three'">option 3<label>

    <div [ngSwitch]="radiooption">
    
    </div>
   `,
  styles: [`
  .disp{
    display:none;
  }
  .even{
    color:red;
  }
 .large{
    font-size:20px;
  }
  .larger{
    font-size:30px;
  }
  .odd{
    color:blue;
  }
  `]
})
export class RendererComponent implements OnInit {
  radiooption;
 oddsection;
 num: number[]= [1, 2, 3, 4, 5, 6, 7];
 constructor() {}

  ngOnInit() {
  }

}
