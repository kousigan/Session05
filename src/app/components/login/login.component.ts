import { Component, OnInit } from '@angular/core';
import { UserService } from './../../services/user.service';
import { Router } from '@angular/router';
import { CookieService } from 'ng2-cookies';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

   error: boolean  ;

  constructor(private userservice:UserService,
              private router:Router,
              private _cookieService:CookieService) {
  
   }

  ngOnInit() {
    if(this.userservice.getUser("")!="Guest"){
           this.router.navigate(['/pages'])
    }

    
  }
 login(username,password){
   if(this.userservice.validateUser(username,password)){
    this._cookieService.delete("username") 
    this._cookieService.set("username",this.userservice.getUser(""))
    this.router.navigate(['/pages'])
   }
    else{
      console.log("try again!!")
      this.error=true
      
    }
 }
}
