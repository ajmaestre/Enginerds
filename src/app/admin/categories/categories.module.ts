import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoriesComponent } from './categories.component';
import { CategoriesService } from './categories.service';
import { AddCategoryComponent } from './add-category/add-category.component';
import { SubcategoriesService } from './subcategories.service';



@NgModule({
  declarations: [CategoriesComponent, AddCategoryComponent],
  imports: [
    CommonModule
  ],
  providers: [CategoriesService, SubcategoriesService]
})
export class CategoriesModule { }
