import { Component, OnDestroy, OnInit } from '@angular/core';
import { UpdateUsersService } from './update-users.service';
import { Subscription } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UsersService } from '../users/users.service';
import { UsersComponent } from '../users/users.component';
import { User } from 'src/app/interfaces/user';

@Component({
  selector: 'app-update-users',
  templateUrl: './update-users.component.html',
  styleUrls: ['./update-users.component.css']
})
export class UpdateUsersComponent implements OnInit, OnDestroy {

  private updateSubscription!: Subscription;
  private getDataSubscription!: Subscription;
  data: FormGroup;

  constructor(private usersService: UsersService, public updateService: UpdateUsersService, private userComponent: UsersComponent) { 
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
    this.getData();
  }

  update(){
    this.updateSubscription = this.usersService.updateUser(this.data.value.email, this.data.value).subscribe(
      {
        next: (res) => {
          this.userComponent.getListUsers();
        },
        error: (error) => {
          console.log(error);
        }
      }
    );
  }

  getData(){
    this.getDataSubscription = this.usersService.getUserBysEmail(this.updateService.email).subscribe({
      next: (res: User) => {
        this.data.setValue({
          email: res.email,
          name: res.name,
          lastname: res.lastname,
          username: res.username,
          role: res.role,
          password: res.password
        });
      },
      error: (res) =>{
        console.log(res)
      }
    });
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
    this.updateSubscription?.unsubscribe();
    this.getDataSubscription?.unsubscribe();
  }

}
