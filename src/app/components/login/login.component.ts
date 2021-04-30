import { Component, OnInit } from '@angular/core';
import {Logindetails} from 'src/app/models/logindetails.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { }

  public UserLogin={
    name:"",
    password:""

  }

  userDetails: Logindetails = {
    userName:this.UserLogin.name,
    userPassword:this.UserLogin.password

  };

  onSubmit(value){
    console.log(value.name);
    console.log(value.password);
    this.userDetails.userName = value.name;
    this.userDetails.userPassword=value.password;
    console.log(this.userDetails.userName);


    //  this._register.registerUser(this.userDetails).subscribe(data => {
    //    this.userDetails = data;
    //  })
  }

  ngOnInit(): void {
  }

}
