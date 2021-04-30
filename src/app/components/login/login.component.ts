import { Component, OnInit } from '@angular/core';
import {Logindetails} from 'src/app/models/logindetails.model';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private _login: LoginService) { }

  public UserLogin={
    name:"",
    password:""

  }

  userLoggedin:Logindetails = {
    userName:this.UserLogin.name,
    userPassword:this.UserLogin.password

  };

  userDetails: Logindetails = {
    userName:this.UserLogin.name,
    userPassword:this.UserLogin.password

  };

  onSubmit(value){
  
    this.userDetails.userName = value.name;
    this.userDetails.userPassword=value.password;
    console.log(this.userLoggedin.userName);
    console.log(this.userLoggedin.userPassword);

     this._login.loginUser(this.userDetails).subscribe(data => {
       this.userLoggedin = data;
     })
  }

  ngOnInit(): void {
  }

}
