import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UpdateUsersComponent } from './update-users.component';
import { UpdateUsersService } from './update-users.service';



@NgModule({
  declarations: [UpdateUsersComponent],
  imports: [
    CommonModule
  ],
  providers: [UpdateUsersService]
})
export class UpdateUsersModule { }
