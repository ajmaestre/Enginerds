import { Component, OnInit, OnDestroy } from '@angular/core';
import { UsersService } from './users.service';
import { Subscription } from 'rxjs';
import { User } from 'src/app/interfaces/user';
import { RegisterUsersService } from '../register-users/register-users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit, OnDestroy {

  listSubscription!: Subscription;
  listUsers: User[] = [];

  constructor(private usersService: UsersService, public registerService: RegisterUsersService) { }

  ngOnInit(): void {
    this.getListUsers();
  }

  getListUsers(){
    this.listSubscription = this.usersService.getUsers().subscribe({
      next: (res: User[]) => {
        this.listUsers = res;
      },
      error: (err) => {
        console.log(err);
      }
    });
  }

  reload(){
    this.getListUsers();
  }

  ngOnDestroy(): void {
    this.listSubscription?.unsubscribe();
  }

}
