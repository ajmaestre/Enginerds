import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileUserComponent } from './profile-user.component';
import { ProfileUserService } from './profile-user.service';


@NgModule({
  declarations: [ProfileUserComponent],
  imports: [
    CommonModule
  ],
  providers: [ProfileUserService]
})
export class ProfileUserModule { }
