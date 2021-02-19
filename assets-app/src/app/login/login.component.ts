import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../security/auth.service';
import { UserInput } from './user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent {

  username: string;
  password: string;
  register: boolean;
  successMessage: string;
  errors: string[];

  constructor(
    private router: Router,
    private authService: AuthService) { }

  onSubmit() {
    if (!this.username || !this.password) {
      this.errors = ['Login and password are required']
    } else {

      this.authService.login(this.username, this.password)
        .subscribe(response => {
          const access_token = JSON.stringify(response);
          localStorage.setItem('access_token', access_token);
          localStorage.setItem('user_name', this.username);
          localStorage.setItem('expiration_in', (Math.floor(Date.now() / 1000)).toString());
          this.router.navigate(['/home']);

        }, errorResponse => {
          this.errors = ['Login or password invalid']
        })
    }
  }

  prepareRegister(event) {
    event.preventDefault();
    this.register = true;
  }

  cancelRegister() {
    this.register = false;
  }

  save() {
    const usuario: UserInput = new UserInput();
    usuario.username = this.username;
    usuario.password = this.password;

    if (!this.username || !this.password) {
      this.errors = ['Login and password are required']
    } else {

      this.authService.save(usuario).subscribe(data => {
        this.successMessage = "User successfully registered";
        this.register = false;
        this.username = '';
        this.password = '';
        this.errors = [];

      }, error => {
        this.successMessage = null;
        this.errors = [error];
      })
    }
  }

}
