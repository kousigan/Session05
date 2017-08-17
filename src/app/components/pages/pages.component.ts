import { Component, OnInit } from '@angular/core';
import { UserService } from './../../services/user.service';
import { Router } from '@angular/router';
import { CookieService } from 'ng2-cookies';

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.css'],
  providers: [CookieService]
})
export class PagesComponent implements OnInit {

   username: string;
  stat: string;




  constructor(private userservice: UserService,
              private router: Router,
              private _cookieService: CookieService) {

              }
  ngOnInit() {
    // tslint:disable-next-line:whitespace
    if( (this.username =this.userservice.getUser('')) ==='Guest') {
      this.stat = 'login';
    }
    // tslint:disable-next-line:one-line
    else{
      this.stat = 'logout';
    }

  }



  logout(){
    this._cookieService.deleteAll();
    this.userservice.setUser("Guest");
    this.router.navigate(['/login'])
  }




}
