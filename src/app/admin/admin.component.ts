import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { AdminService } from './admin.service';
import { Category } from '../interfaces/category';
import { User } from '../interfaces/user';
import { Post } from '../interfaces/post';
import { Session } from '../interfaces/session';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  saveSubscription!: Subscription;
  deleteSubscription!: Subscription;
  updateSubscription!: Subscription;
  uniqueSubscription!: Subscription;
  listSubscription!: Subscription;

  imageUrl: string = '';


  constructor(private adminService: AdminService) {
  }

  ngOnInit(): void {
    // this.saveCategory(); 
    // this.saveUser();
    // this.getSession();
    // this.getusers();
    // this.savePost();
  }

  getCategories(){
    this.adminService.getCategories().subscribe(
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
    this.adminService.getCategory(5).subscribe(
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

  getusers(){
    this.adminService.getUsers().subscribe(
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

  getProflie(){
    this.adminService.getProfile().subscribe(
      {
        next: (res) => {
          this.imageUrl = `http://localhost:8080/${res.image}`;
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
    this.adminService.saveCategory(category).subscribe(
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

  saveUser(){
    const user: User = {
      name: 'Alexander', 
      lastname: 'Maestre', 
      username: 'ajmaestre', 
      email: 'ajmaestretorres@gmail.com', 
      password: '123456',
      role: 'admin'
  };
    this.adminService.saveUser(user).subscribe(
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

  onLoad(event: Event): void {
    const element = event.target as HTMLInputElement;
    const file = element.files?.item(0);
    if (file) {
      this.adminService.saveImage(file)
      .subscribe(res => {
        console.log(res);
      });
    }
  }

  savePost(){
    const post: Post = {
      title: 'Programacion',
      brief: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Id, ratione?',
      content: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Id, ratione? Lorem ipsum dolor sit, amet consectetur adipisicing elit. Id, ratione?', 
      image: 'image',
      user_id: 4,
      category_id: 4
  };
    this.adminService.savePost(post).subscribe(
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
    this.adminService.deleteCategory(1).subscribe(
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
    this.adminService.updateCategory(2, category).subscribe(
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

  getSession(){
    const session: Session = {
      username: 'ajmaestre',
      password: '123456'
    }
    this.adminService.getSession(session).subscribe({
      next: (res) => {
        console.log(res);
      },
      error: (err) => {
        console.log(err);
      }
    });
  }

  ngOnDestroy(): void {
    this.uniqueSubscription?.unsubscribe();
    this.listSubscription?.unsubscribe();
    this.saveSubscription?.unsubscribe();
    this.deleteSubscription?.unsubscribe();
    this.updateSubscription?.unsubscribe();
  }

}
