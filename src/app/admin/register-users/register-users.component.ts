import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { UsersService } from '../users/users.service';
import { RegisterUsersService } from './register-users.service';
import { UsersComponent } from '../users/users.component';

@Component({
  selector: 'app-register-users',
  templateUrl: './register-users.component.html',
  styleUrls: ['./register-users.component.css']
})
export class RegisterUsersComponent implements OnInit {

  private registerSubscription!: Subscription;
  data: FormGroup;

  constructor(private usersService: UsersService, public registerService: RegisterUsersService, private userComponent: UsersComponent) { 
    this.data = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      name: new FormControl('', Validators.required),
      lastname: new FormControl('', Validators.required),
      username: new FormControl('', Validators.required),
      role: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required)
    });
  }

  ngOnInit(): void {
  }

  register(){
    this.registerSubscription = this.usersService.saveUser(this.data.value).subscribe(
      {
        next: (res) => {
          this.cleanForm();
          this.userComponent.getListUsers();
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
      role: '',
      password: ''
    });
  }

  ngOnDestroy(): void {
    this.registerSubscription?.unsubscribe();
  }

}
