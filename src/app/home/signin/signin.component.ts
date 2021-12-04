import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
    templateUrl: './signin.component.html'
})
export class SignInComponent implements OnInit {
    
    loginForm!: FormGroup;
    @ViewChild('userNameInput')
    userNameInput!: ElementRef<HTMLInputElement>;
    
    constructor(
        private formBuilder: FormBuilder,      
        private router: Router
     ) { }

    ngOnInit(): void {
        this.loginForm = this.formBuilder.group({
            userName: ['', Validators.required]    
        });
         
    } 
    
    Validate(name: string): boolean {
        const nameHasError = this.loginForm.get(name)?.hasError('required')
        if (nameHasError) { return nameHasError} else { return false }
      }

      goToLogin() {
        this.router.navigate(['/dashboard']);
    }



    
}