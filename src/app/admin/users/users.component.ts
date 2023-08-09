import { Component, OnInit, OnDestroy } from '@angular/core';
import { UsersService } from './users.service';
import { Subscription } from 'rxjs';
import { User, UserSafe } from 'src/app/interfaces/user';
import { RegisterUsersService } from '../register-users/register-users.service';
import { UpdateUsersService } from '../update-users/update-users.service';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit, OnDestroy {

  listSubscription!: Subscription;
  usersByAllSubscription!: Subscription;
  deleteSubscription!: Subscription;
  photoSubscription!: Subscription;

  listUsers: UserSafe[] = [];
  email_list: string[] = [];

  modal_msg: boolean = false;

  msg: string = '';

  constructor(private usersService: UsersService, 
              public registerService: RegisterUsersService, 
              public updateService: UpdateUsersService,
              private sanitizer: DomSanitizer) { }

  ngOnInit(): void {
    this.getListUsers();
  }

  getListUsers(){
    this.listSubscription = this.usersService.getUsers().subscribe({
      next: (res: UserSafe[]) => {
        this.listUsers = res;
        this.listUsers.forEach(user => {
          if(user.image)
            this.getPhoto(user.image, user);
        });
      },
      error: (err) => {
        console.log(err);
      }
    });
  }

  getPhoto(image: SafeUrl, user: UserSafe){
    this.photoSubscription = this.usersService.getPhoto(image).subscribe({
      next: (res: Blob) => {
        user.image = this.sanitizer.bypassSecurityTrustUrl(URL.createObjectURL(res));
      },
      error: (err) => {
        console.log(err);
      }
    })
  }

  getUsersByAll(data: string){
    this.usersByAllSubscription = this.usersService.getUsersByAll(data).subscribe({
      next: (res: User[]) => {
        this.listUsers = res;
        this.listUsers.forEach(user => {
          if(user.image)
            this.getPhoto(user.image, user);
        });
      },
      error: (err) => {
        console.log(err)
      }
    });
  }

  searchUser(event: any){
    this.getUsersByAll(event.target.value);
  }

  reload(){
    this.getListUsers();
  }

  userSelected(email: string){
    if(this.email_list.includes(email)){
      this.email_list.splice(this.email_list.indexOf(email), 1);
    }else{
      this.email_list.push(email);
    }
  }

  boxSelected(email: string): boolean{
    return this.email_list.includes(email);
  }

  deleteUser(email: string){
    this.deleteSubscription = this.usersService.deleteUser(email).subscribe({
      next: (res) => {
        this.getListUsers();
      },
      error: (err) => {
        console.log(err);
      }
    });
  }

  deleteUsers(){
    if(this.email_list.length === 0){
      this.msg = '¡Debe seleccionar al menos un elemento a eliminar!';
      this.modal_msg = true;
    }else{
      this.email_list.forEach(email => {
        this.deleteUser(email);
      });
      this.email_list.splice(0, this.email_list.length);
    }
  }

  updateUser(){
    if(this.email_list.length === 1){
      this.updateService.loadModal(this.email_list[0], true);
    }else if(this.email_list.length === 0){
      this.msg = '¡Debe seleccionar un elemento a editar!';
      this.modal_msg = true;
    }else{
      this.msg = '¡Solo puede editar un elemento a la vez!';
      this.modal_msg = true;
    }
  }

  ngOnDestroy(): void {
    this.listSubscription?.unsubscribe();
    this.usersByAllSubscription?.unsubscribe();
    this.deleteSubscription?.unsubscribe();
    this.photoSubscription!.unsubscribe();
  }

}
