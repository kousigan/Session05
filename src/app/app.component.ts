import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ng2-cookies';
import { UserService } from './services/user.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [CookieService]
})
export class AppComponent implements OnInit {
 user: string;
  constructor(private cookieservice: CookieService,
              private userService: UserService) {}
  ngOnInit() {
   if ((this.user= this.cookieservice.get("username"))!=""){
     this.userService.setUser(this.user)
   }
    else{
      this.userService.setUser("Guest")
    }
  }
}
