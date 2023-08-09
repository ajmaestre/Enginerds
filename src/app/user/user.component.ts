import { Component, OnDestroy, OnInit } from '@angular/core';
import { UsersService } from '../admin/users/users.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit, OnDestroy {

  constructor(private userService: UsersService) { }

  ngOnInit(): void {
  }


  ngOnDestroy(): void {
  }

}
