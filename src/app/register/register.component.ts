import { NONE_TYPE } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  
  alertpass:any;
  alertname:any;
  alertpass1:any;
  constructor(private router:Router){}
  
  abc(name:any,pass:any,cpass:any)
  {
    if( pass==cpass && (name!==""||pass!==""||cpass!==""))
    {
      localStorage.setItem("username",name);
      localStorage.setItem("password",pass);
      this.router.navigateByUrl("login");
    }
    else 
    {
    
      this.alertpass="Enter same password"
      this.alertname="Enter valid name"
      this.alertpass1="Enter valid password"
      
    }
    

  }
  ngOnInit(): void {
  }

}
