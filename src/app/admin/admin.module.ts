import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin.component';
import { AdminService } from './admin.service';
import { RegisterUsersComponent } from './register-users/register-users.component';
import { UpdateUsersComponent } from './update-users/update-users.component';
import { ProfileComponent } from './profile/profile.component';
import { PageAdminComponent } from './page-admin/page-admin.component';



@NgModule({
  declarations: [AdminComponent, RegisterUsersComponent, UpdateUsersComponent, ProfileComponent, PageAdminComponent],
  imports: [
    CommonModule
  ],
  providers: [AdminService]
})
export class AdminModule { }
