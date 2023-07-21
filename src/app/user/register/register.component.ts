import { Component, OnInit, OnDestroy } from '@angular/core';
import { RegisterService } from './register.service';
import { Subscription } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit, OnDestroy {

  private registerSubscription!: Subscription;
  data: FormGroup;

  constructor(private registerService: RegisterService) { 
    this.data = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      name: new FormControl('', Validators.required),
      lastname: new FormControl('', Validators.required),
      username: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required)
    });
  }

  ngOnInit(): void {
  }

  register(){
    this.registerSubscription = this.registerService.saveUser(this.data.value).subscribe(
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
      email: '',
      name: '',
      lastname: '',
      username: '',
      password: ''
    });
  }

  ngOnDestroy(): void {
    this.registerSubscription?.unsubscribe();
  }

}
