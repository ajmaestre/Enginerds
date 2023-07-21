import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { LoginService } from './login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit, OnDestroy {

  private loginSubscription!: Subscription;
  data: FormGroup;

  constructor(private loginService: LoginService) { 
    this.data = new FormGroup({
      username: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required)
    });
  }

  ngOnInit(): void {
    
  }

  login(){
    this.loginSubscription = this.loginService.getSession(this.data.value).subscribe(
      {
        next: (res) => {
          this.cleanForm();
        },
        error: (error) => {
          console.log(error);
        }
      }
    );
  }

  cleanForm(){
    this.data.setValue({
      username: '',
      password: ''
    });
  }

  ngOnDestroy(): void {
    this.loginSubscription?.unsubscribe();
  }

}
