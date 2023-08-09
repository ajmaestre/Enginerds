import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AdminService } from '../admin.service';
import { User } from 'src/app/interfaces/user';
import { Subscription } from 'rxjs';
import { ProfileService } from './profile.service';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit, OnDestroy {

  data: FormGroup;
  imageUrl: SafeUrl = '';
  user: User = {};
  alertShowed: boolean = false;

  updateSubscription!: Subscription;
  profileSubscription!: Subscription;
  photoSubscription!: Subscription;
  saveImageSubscription!: Subscription;

  constructor(private adminService: AdminService, private profileService: ProfileService, private sanitizer: DomSanitizer) { 
    this.data = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      name: new FormControl('', Validators.required),
      lastname: new FormControl('', Validators.required),
      username: new FormControl('', Validators.required),
      equal_pass: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required)
    });
  }

  ngOnInit(): void {
    this.getProflie();
  }

  update(){
    if(!this.alertShowed && this.user.email){
      this.updateSubscription = this.profileService.updateProfile(this.user.email, this.data.value).subscribe({
        next: (res) => {
          this.getProflie();
        },
        error: (err) => {
          console.log(err)
        }
      });
    }
  }

  showAlert($event: any){
    setInterval(() => {
      if($event.target.value != this.data.value.password){
        this.alertShowed = true;
      }else{
        this.alertShowed = false;
      }
    }, 50);
  }

  getProflie(){
    this.profileSubscription = this.adminService.getProfile().subscribe(
      {
        next: (res: User) => {
          this.user = res;
          this.getPhoto();
          this.data.setValue({
            email: res.email,
            name: res.name,
            lastname: res.lastname,
            username: res.username,
            password: '',
            equal_pass: ''
          });
        },
        error: (error) => {
          console.log(error);
        }
      }
    );
  }

  getPhoto(){
    this.photoSubscription = this.adminService.getPhoto(this.user.image || '').subscribe({
      next: (res: Blob) => {
        this.imageUrl = this.sanitizer.bypassSecurityTrustUrl(URL.createObjectURL(res));
      },
      error: (err) => {
        console.log(err);
      }
    })
  }

  onLoad(event: Event): void {
    const element = event.target as HTMLInputElement;
    const file = element.files?.item(0);
    if (file) {
      this.saveImageSubscription = this.profileService.saveImage(file)
      .subscribe(res => {
        this.getProflie();
      });
    }
  }

  ngOnDestroy(): void {
    this.updateSubscription?.unsubscribe();
    this.profileSubscription?.unsubscribe();
    this.photoSubscription?.unsubscribe();
    this.saveImageSubscription?.unsubscribe();
  }

}
