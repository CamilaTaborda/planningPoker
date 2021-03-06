import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { take } from 'rxjs/operators';


import { LoginService } from 'src/app/services/login/login.service';
import {User} from './../shared/models/user/user';

@Component({
  selector: 'df-login', //app-login
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})

export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
 

  constructor(
    private formBuilder: FormBuilder,
    private loginService: LoginService,
    private router: Router
  ) { }

  ngOnInit(): void{
   
    this.createForm();
  }

  createForm(): void {

    this.loginForm = this.formBuilder.group({
      userName: ['', [Validators.required, Validators.minLength(3)]],
      owner: [false],
    });
  }

  enter(): void {
    this.login(this.loginForm.value);
  }

  login(user: User): void {
    this.loginService.login(user)
    .pipe(
      take(1)
    )
    .subscribe(
      // _response
      (response: any) => this.onSuccessLogin(),
      // _error
      (error: any) => this.onErrorLogin()
    );
  }

  onSuccessLogin(): void {
    this.loginForm.reset();
    this.router.navigate(['dashboard']);
  }

  onErrorLogin(): void {
    console.log('Algo deu errado');
  }

  onReset(){
    this.loginForm.reset();
  }




}
