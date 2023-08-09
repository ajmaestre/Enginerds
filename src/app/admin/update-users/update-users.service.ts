import { Injectable } from '@angular/core';
import { User } from 'src/app/interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class UpdateUsersService {

  email: string = '';
  loadModalUpdate: boolean = false;

  constructor() { 

  }

  loadModal(email_user: string, loadModal_update: boolean){
    this.email = email_user;
    this.loadModalUpdate = loadModal_update;
  }

}
