import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
    username = new FormControl();
    password = new FormControl();

    loginSubmit() {
      console.log('entered');
    }
    get_username_error(){
      return this.username.hasError('required')?'username is required':'';
    }
    get_password_error(){
      return this.password.hasError('required')?'password is required':'';
    }
}
