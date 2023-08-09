import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { UserService } from '../user.service';
import { User } from 'src/app/interfaces/user';
import { Subscription } from 'rxjs';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';


@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit, OnDestroy {

  profileSubscription!: Subscription;
  photoSubscription!: Subscription;
  userSubscription!: Subscription;
  
  profileUser: User = {};
  imgUrl: SafeUrl = '';

  class_menu: string = 'fas fa-bars';
  class_header: string = 'header';
  class_navbar: string = 'navbar';

  class_submenu: string = 'submenu hide';

  constructor(private router: Router, private userService: UserService, private sanitizer: DomSanitizer) {
    
  }

  ngOnInit(): void {
    this.getUsers();
    // this.getProfile();
  }

  showMenu(){
    const test = /fa-times/;
    if(test.test(this.class_menu)){
      this.class_menu = 'fas fa-bars';
      this.class_header = 'header';
      this.class_navbar = 'navbar';
    }else{
      this.class_menu = 'fas fa-bars fa-times';
      this.class_header = 'header active';
      this.class_navbar = 'navbar active';
    }
  }

  showSubMenu(){
    const test = /hide/;
    if(test.test(this.class_submenu)){
      this.class_submenu = 'submenu show';
    }else{
      this.class_submenu = 'submenu hide';
    }
  }

  logOut(){
    localStorage.clear();
    this.router.navigate(['/']);
  }

  getProfile(){
    this.profileSubscription = this.userService.getProfile().subscribe({
      next: (res: User) => {
        this.profileUser = res;
        this.getPhoto();
      },
      error: (err) => {
        console.log(err);
      }
    });
  }

  getPhoto(){
    this.photoSubscription = this.userService.getPhoto(this.profileUser.image || '').subscribe({
      next: (res: Blob) => {
        this.imgUrl = this.sanitizer.bypassSecurityTrustUrl(URL.createObjectURL(res));
      },
      error: (err) => {
        console.log(err);
      }
    })
  }

  getUsers(){
    this.userSubscription = this.userService.getUsers().subscribe({
      next: (res) => {
        console.log(res);
      },
      error: (err) => {
        console.log(err);
      }
    });
  }

  ngOnDestroy(): void {
    this.profileSubscription?.unsubscribe();
    this.photoSubscription?.unsubscribe();
    this.userSubscription?.unsubscribe();
  }

}
