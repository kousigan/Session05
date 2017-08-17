import { Component, OnInit } from '@angular/core';
import { trigger, state, style, transition, animate, keyframes } from '@angular/animations';

@Component({
  selector: 'app-sidemenu',
  templateUrl: './sidemenu.component.html',
  styleUrls: ['./sidemenu.component.css'],
  animations: [
    trigger ('menuanim', [
      state('active', style({
        color: '#bae5ff',
        transform: 'scale(1.2)'
      })),
      state('default', style({
        color: '#4e5356',
        transform: 'scale(1)'
      })),
      transition( 'default <=> active', animate('1000ms ease-in-out')),
    ]),
  ]
})
export class SidemenuComponent implements OnInit {

  state = 'default';

  constructor() { }
  ngOnInit() {
  }

  animateme() {
    this.state = (this.state === 'default' ? 'active' : 'default');
  }

}
