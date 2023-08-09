import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddCategoryComponent } from './add-category.component';
import { AddCategoryService } from './add-category.service';



@NgModule({
  declarations: [AddCategoryComponent],
  imports: [
    CommonModule
  ],
  providers: [AddCategoryService]
})
export class AddCategoryModule { }
