import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavComponent } from './nav.component';
import { NavService } from './nav.service';



@NgModule({
  declarations: [NavComponent],
  imports: [
    CommonModule
  ],
  providers: [NavService]
})
export class NavModule { }
