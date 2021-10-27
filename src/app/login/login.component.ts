import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  alertpass:any;
  alertname:any;
 anyname:any;
 anypass:any;
 constructor(private router:Router){}
color="red";
 abc(name:any,pass:any)
 {

  this.anyname = localStorage.getItem("username");
  this.anypass = localStorage.getItem("password");

  if(this.anyname==name && this.anypass==pass )
  {
    this.router.navigateByUrl("loan")

  }
  else
  {
    this.alertpass="Enter same password";
    this.alertname="Enter valid name";
    
  }

 }

  ngOnInit(): void {
  }

}
