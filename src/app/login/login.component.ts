import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  email: string;
  password: string;
  login: FormGroup;
  constructor(public fb: FormBuilder, public router: Router) { 
    this.login = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
    })
  }

  ngOnInit(): void {
  }
  loginUser(){
    console.log(this.email, this.password)
    if(this.email == 'admin' && this.password == 'admin'){
      this.router.navigate(['/', 'course']);
    }
    else{
      window.alert("Invalid credentials")
    }
  }
  resetPassword(){

  }
}
