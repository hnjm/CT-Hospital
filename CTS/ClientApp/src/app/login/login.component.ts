import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, FormBuilder} from '@angular/forms';
import { LoginService } from '../Services/login.service';
import { Router, ActivatedRoute } from '@angular/router';
import { IUserModel } from '../Model/UserModel';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loading : boolean = true;
  loginForm!: FormGroup;

  private retURL = "/renewPassword";
  

  constructor( private login : LoginService,
                private route: Router) { }

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      username : new FormControl(''),
      password : new FormControl('')
    });

  }

  //Working COde for Login Functionality - login 0.1
  // Login( ){
  //   this.login.logUser(this.loginForm.get("username")?.value, 
  //                     this.loginForm.get("password")?.value)
  //               .subscribe({
  //                 next : (data : any) => {console.log(data);},
  //                 error: (err : any) => {console.log(err)}
  //               });
  // }

  //Try new Login Fun - Login 0.2this.retURL, {id:this.user.ID}
  Login(){
    this.login.logUser(this.loginForm.get("username")?.value, 
                        this.loginForm.get("password")?.value)
                  .subscribe({
                    next : (data:any) => {
                                            console.log(data.value);
                                            console.log("from service = " , data);
                                            //this.route.navigateByUrl(this.retURL);
                                            this.route.navigate([data.value]);
                                          },
                    error: (err : any) => {console.log(err)}
                  });
                  
  }

  // Login(){
  //   this.LoginFunc();
  //   if(this.user.Password === "Password99")
  //   {
  //     this.route.navigate([this.retURL, this.user.ID]);
  //   }
  // }

}
