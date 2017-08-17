import { Injectable } from '@angular/core';
 

@Injectable()
export class UserService {

 private defaultuser:string;
   
 private userlogin:Array<{username:string,password:string}>;
 
  constructor( ) { 
    this.userlogin=[
      {username:'Admin',password:'admin'},
      {username:'Guest',password:'guest'},
      {username:'Kousi',password:'kousi'}
    ]

  }

  validateUser(user,pass){
    if(this.userlogin.find(x=>(x.username==user)&&(x.password==pass)))
      {
      this.setUser(user);
       console.log(user,pass)
       return true
      }
      else{
        return false
      }

      
  }
  setUser(user){
    this.defaultuser=user;
  }
 
  getUser(name:string){
    return this.defaultuser
  }
}
