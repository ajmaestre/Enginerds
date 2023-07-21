import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin.component';
import { AdminService } from './admin.service';
import { RegisterUsersComponent } from './register-users/register-users.component';



@NgModule({
  declarations: [AdminComponent, RegisterUsersComponent],
  imports: [
    CommonModule
  ],
  providers: [AdminService]
})
export class AdminModule { }
