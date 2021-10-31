import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
path="../../assets/avatar.jpg"
public loginForm:FormGroup
constructor(private router:Router,private fb:FormBuilder){}
private initloginForm():void
{
  this.loginForm=this.fb.group
  ({
    username:["",Validators.required],
    password:["",Validators.required]

  })

}
public submit():void
{
  console.log("Hi")
  let check=true;
    Object.keys(this.loginForm.controls).forEach(key=>
      {
      if(!this.loginForm.controls[key].valid)
      {
        this.loginForm.controls[key].markAsTouched() 
        check=false; 
      }   
})
if(!check)return;
  const users:any[] =localStorage.getItem("users")?JSON.parse( localStorage.getItem("users") as string ):[];
  const usernameExists=users.find(user=>user?.username===this.loginForm.value.username);
  if(!usernameExists)
  {
    alert("Username does not exists")
    return;
  }
  if(usernameExists.password===this.loginForm.value.password){
    this.router.navigateByUrl("loan");
  }else{
    alert("Username & password do not match")
  }
}

ngOnInit(): void 
{
  this.initloginForm();
}

}
