import { Component, OnDestroy, OnInit } from '@angular/core';
import { AddCategoryService } from './add-category.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CategoriesService } from '../categories.service';
import { CategoriesComponent } from '../categories.component';
import { Subscription } from 'rxjs';
import { Category } from 'src/app/interfaces/category';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.css']
})
export class AddCategoryComponent implements OnInit, OnDestroy {

  saveSubscription!: Subscription;
  updateSubscription!: Subscription;
  getDataSubscription!: Subscription;

  data: FormGroup;
  id!: number;

  constructor(public addService: AddCategoryService, private categoryService: CategoriesService, private categoryComponent: CategoriesComponent) { 
    this.data = new FormGroup({
      name: new FormControl('', Validators.required),
      description: new FormControl('', Validators.required)
    });
  }

  ngOnInit(): void {
    if(this.addService.modeUpdate){
      this.getData();
    }
  }

  register(){
    this.saveSubscription = this.categoryService.saveCategory(this.data.value).subscribe(
      {
        next: (res) => {
          this.categoryComponent.getCategories();
          this.cleanForm();
        },
        error: (error) => {
          console.log(error);
        }
      }
    );
  }

  updateCategory(){
    this.updateSubscription = this.categoryService.updateCategory(this.id, this.data.value).subscribe(
      {
        next: (res) => {
          this.categoryComponent.getCategories();
        },
        error: (error) => {
          console.log(error);
        }
      }
    );
  }

  getData(){
    this.getDataSubscription = this.categoryService.getCategory(this.addService.id).subscribe({
      next: (res: Category) => {
        if(res.id){
          this.id = res.id;
        }
        this.data.setValue({
          name: res.name,
          description: res.description,
        });
      },
      error: (res) =>{
        console.log(res)
      }
    });
  }

  cleanForm(){
    this.data.setValue({
      name: '',
      description: ''
    });
  }

  ngOnDestroy(): void {
    this.saveSubscription?.unsubscribe();
    this.updateSubscription?.unsubscribe();
    this.getDataSubscription?.unsubscribe();
  }

}
