import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

 anyname:any;
 abc(name:any,pass:any)
 {

  this.anyname = localStorage.getItem("username");

  if(this.anyname==name)
  {
    alert("logged in")
  }else{"logged out"}

 }

  ngOnInit(): void {
  }

}
