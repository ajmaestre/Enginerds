import { Component, OnInit, OnDestroy } from '@angular/core';
import { UserService } from '../user.service';


@Component({
  selector: 'app-home-user',
  templateUrl: './home-user.component.html',
  styleUrls: ['./home-user.component.css']
})
export class HomeUserComponent implements OnInit, OnDestroy {


  constructor(private userService: UserService) {

  }

  ngOnInit(): void {
  }

  getUsers(){}

  ngOnDestroy(): void {
  }

}
