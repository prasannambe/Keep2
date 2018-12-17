import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { AuthenticationService } from '../services/authentication.service';
import { RouterService } from '../services/router.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
    username = new FormControl('',[ Validators.required ]);
    password = new FormControl('',[ Validators.required ]);
    public bearerToken : any;
    constructor(private authservice: AuthenticationService,
                private routerService : RouterService){

    }
    loginSubmit() {
      this.authservice.authenticateUser({"username" : this.username.value,"password" : this.password.value})
      .subscribe( res => {
        this.bearerToken = res['token'];
        this.authservice.setBearerToken(this.bearerToken);
        this.routerService.routeToDashboard();
      },
      err => {

      })
    }
    get_username_error(){
      return this.username.hasError('required')?'username is required':'';
    }
    get_password_error(){
      return this.password.hasError('required')?'password is required':'';
    }
}
