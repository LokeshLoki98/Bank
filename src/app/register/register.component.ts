import { NONE_TYPE } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  
  // alertpass:any;
  // alertname:any;
  // alertpass1:any;
  // color="red";

  public registerForm:FormGroup;
  constructor(private router:Router,private fb:FormBuilder){}
  private initRegisterForm():void
  {
    this.registerForm=this.fb.group
    ({
      username:new FormControl("guru",Validators.required),
      password:new FormControl("123",Validators.required),
      confirmPassword:new FormControl("",Validators.required)
      
    }) 
  }
  public submitRegisterForm():void{

    let check=true;
    Object.keys(this.registerForm.controls).forEach(key=>
      {
      if(!this.registerForm.controls[key].valid)
      {
        console.log(key);
        this.registerForm.controls[key].markAsTouched() 
        check=false; 
      }

    })
    if(!check)return;
    const users:any[] =localStorage.getItem("users")?JSON.parse( localStorage.getItem("users") as string ):[];
    const usernameExists=users.find(user=>user?.username===this.registerForm.value.username);
    if(usernameExists)
    {
      alert("username exists!!!!")
      return;
    }
    const user=this.registerForm.value;
    delete user.confirmPassword;
    users.push({
     ...user
    })
    localStorage.setItem("users",JSON.stringify(users))
    this.router.navigateByUrl("login")
    
    console.log(this.registerForm.value)
  }
  // abc(name:any,pass:any,cpass:any)
  //   {
  //     if( (pass==cpass) && (pass!=="") &&(name!==""))
  //     {
  //       localStorage.setItem("username",name);
  //       localStorage.setItem("password",pass);
  //       this.router.navigateByUrl("login");
  //     }
  //     else 
  //     {
  //       this.alertpass="Enter same password";
  //       this.alertname="Enter valid name";
  //       this.alertpass1="Enter valid password";    
  //     }
      

    // }
  ngOnInit(): void {
    this.initRegisterForm()
  }

}
