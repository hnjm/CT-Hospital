import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { LoginService } from '../Services/login.service';

@Component({
  selector: 'app-renew-password',
  templateUrl: './renew-password.component.html',
  styleUrls: ['./renew-password.component.css']
})
export class RenewPasswordComponent implements OnInit {

  renewpasswordform !: FormGroup;
  id !: any;
  constructor(private formbuilder: FormBuilder,
              private login : LoginService,
              private router : Router,
              private route : ActivatedRoute) { }

  ngOnInit(): void {
    this.renewpasswordform = this.formbuilder.group({
      newpassword :[''],
      repassword :  ['']
    });

    // console.log(this.router.url);
    // console.log(this.route.snapshot.paramMap.get('id'));
    this.renewPassword();
  }

  renewPassword(){
    this.id = this.route.snapshot.paramMap.get('id');
    if(this.renewpasswordform.get('newpassword')?.value === this.renewpasswordform.get('repassword')?.value)
    {
      this.login.resertPassword(this.id,
                                this.renewpasswordform.get('newpassword')?.value, 
                                this.renewpasswordform.get('repassword')?.value)
                                .subscribe({
                                  next : (data :any ) => {
                                    console.log(data);
                                  }
                                });     
    }

  }

}
