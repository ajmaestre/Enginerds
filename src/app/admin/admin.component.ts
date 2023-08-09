import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { AdminService } from './admin.service';
import { Category } from '../interfaces/category';
import { Post } from '../interfaces/post';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {


  imageUrl: string = '';


  constructor(private adminService: AdminService) {
  }

  ngOnInit(): void {

  }

  ngOnDestroy(): void {
    
  }

}
