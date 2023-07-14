import { Component, OnInit, OnDestroy } from '@angular/core';
import { UserService } from '../user.service';
import { Subscription } from 'rxjs';
import { Category } from 'src/app/interfaces/category';
import { error } from 'console';

@Component({
  selector: 'app-home-user',
  templateUrl: './home-user.component.html',
  styleUrls: ['./home-user.component.css']
})
export class HomeUserComponent implements OnInit, OnDestroy {

  saveSubscription!: Subscription;
  deleteSubscription!: Subscription;
  updateSubscription!: Subscription;
  uniqueSubscription!: Subscription;
  listSubscription!: Subscription;

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    // this.getCategories();
    // this.getCategory();
  }

  getCategories(){
    this.userService.getCategories().subscribe(
      {
        next: (res) => {
          console.log(res);
        },
        error: (error) => {
          console.log(error);
        }
      }
    );
  }

  getCategory(){
    this.userService.getCategory(3).subscribe(
      {
        next: (res) => {
          console.log(res);
        },
        error: (error) => {
          console.log(error);
        }
      }
    );
  }

  saveCategory(){
    const category: Category = {
      name: 'Programación'
    }
    this.userService.saveCategory(category).subscribe(
      {
        next: (res) => {
          console.log(res);
        },
        error: (error) => {
          console.log(error);
        }
      }
    );
  }

  deleteCategory(){
    this.userService.deleteCategory(1).subscribe(
      {
        next: (res) => {
          console.log(res);
        },
        error: (error) => {
          console.log(error);
        }
      }
    );
  }

  updateCategory(){
    const category: Category = {
      name: 'Mineria de datos'
    }
    this.userService.updateCategory(2, category).subscribe(
      {
        next: (res) => {
          console.log(res);
        },
        error: (error) => {
          console.log(error);
        }
      }
    );
  }

  ngOnDestroy(): void {
    this.uniqueSubscription?.unsubscribe();
    this.listSubscription?.unsubscribe();
    this.saveSubscription?.unsubscribe();
    this.deleteSubscription?.unsubscribe();
    this.updateSubscription?.unsubscribe();
  }

}
