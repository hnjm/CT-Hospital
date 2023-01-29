import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoginService } from '../Services/login.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm!: FormGroup;

  constructor( private formbuilder : FormBuilder,
                private loginservice : LoginService) { }

  ngOnInit(): void {
    this.registerForm = this.formbuilder.group({
      username : [''],
      password : ['', Validators.required],
      FirstName : ['', Validators.required],
      LastName : ['', Validators.required],
      Email : ['', [Validators.required, Validators.email]]
    })
  }

  Register(){
    //console.log("User = " + this.registerForm.value);
    this.loginservice.registerUser(this.registerForm.value) 
          .subscribe({
            next: (data) => { console.log(data); },
            error: (error) => {console.log(error);}
          });
  }

}
