import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterUsersComponent } from './register-users.component';
import { RegisterUsersService } from './register-users.service';



@NgModule({
  declarations: [RegisterUsersComponent],
  imports: [
    CommonModule
  ],
  providers: [RegisterUsersService]
})
export class RegisterUsersModule { }
