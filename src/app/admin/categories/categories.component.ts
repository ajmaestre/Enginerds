import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/interfaces/category';
import { CategoriesService } from './categories.service';
import { Subscription } from 'rxjs';
import { AddCategoryService } from './add-category/add-category.service';
import { SubcategoriesService } from './subcategories.service';
import { SubCategory } from 'src/app/interfaces/subcategory';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {

  listCategory: Category[] = [];
  listSubCategory: SubCategory[] = [];
  listIdCategory: number[] = [];
  idCategory!: number;
  subCategory: SubCategory = {};
  idSubCategory!: number;

  listSubscription!: Subscription;
  deleteSubscription!: Subscription;
  searchSubscription!: Subscription;

  listSubCategorySubscription!: Subscription;
  saveSubCategorySubscription!: Subscription;
  subCategorySubscription!: Subscription;
  editSubCategorySubscription!: Subscription;
  deleteSubCategorySubscription!: Subscription;

  modal_msg: boolean = false;
  showSubCategory: boolean = false;
  msg: string = '';

  dataSub: FormGroup;

  constructor(private categoryService: CategoriesService, 
              public addCategoryService: AddCategoryService,
              private subCategoryService: SubcategoriesService) {
                this.dataSub = new FormGroup({
                  name: new FormControl('', Validators.required),
                  description: new FormControl('', Validators.required),
                });
  }

  ngOnInit(): void {
    this.getCategories();
  }

  getCategories(){
    this.listSubscription = this.categoryService.getCategories().subscribe(
      {
        next: (res: Category[]) => {
          this.listCategory = res;
        },
        error: (error) => {
          console.log(error);
        }
      }
    );
  }

  getCategory(name: string){
    this.searchSubscription = this.categoryService.getCategoryByName(name).subscribe(
      {
        next: (res: Category[]) => {
          this.listCategory = res;
        },
        error: (error) => {
          console.log(error);
        }
      }
    );
  }

  search($event: any){
    this.getCategory($event.target.value);
  }

  reload(){
    this.getCategories();
  }

  categorySelected(id: number){
    if(this.listIdCategory.includes(id)){
      this.listIdCategory.splice(this.listIdCategory.indexOf(id), 1);
    }else{
      this.listIdCategory.push(id);
    }
  }

  boxSelected(id: number): boolean{
    return this.listIdCategory.includes(id);
  }

  deleteCategory(id: number){
    this.deleteSubscription = this.categoryService.deleteCategory(id).subscribe(
      {
        next: (res) => {
          this.getCategories();
        },
        error: (error) => {
          console.log(error);
        }
      }
    );
  }

  deleteCategories(){
    if(this.listIdCategory.length === 0){
      this.msg = '¡Debe seleccionar al menos un elemento a eliminar!';
      this.modal_msg = true;
    }else{
      this.listIdCategory.forEach(id => {
        this.deleteCategory(id);
      });
      this.listIdCategory.splice(0, this.listIdCategory.length);
    }
  }

  updateCategory(){
    if(this.listIdCategory.length === 1){
      this.addCategoryService.modalShowed(true, this.listIdCategory[0]);
    }else if(this.listIdCategory.length === 0){
      this.msg = '¡Debe seleccionar un elemento a editar!';
      this.modal_msg = true;
    }else{
      this.msg = '¡Solo puede editar un elemento a la vez!';
      this.modal_msg = true;
    }
  }

  getListSubCategory(){
    this.listSubCategorySubscription = this.subCategoryService.getSubCategoryByCategory(this.idCategory).subscribe({
      next: (res: SubCategory[]) => {
        this.listSubCategory = res;
      },
      error: (err) => {
        console.log(err)
      }
    });
  }

  reloadListSubCat(){
    this.getListSubCategory();
  }

  getSubCategory(name: string){
    this.subCategorySubscription = this.subCategoryService.getSubCategoryByName(name).subscribe({
      next: (res: SubCategory[]) => {
        this.listSubCategory = res;
      },
      error: (err) => {
        console.log(err)
      }
    });
  }

  searchSubCategory($event: any){
    this.getSubCategory($event.target.value);
  }

  saveSubCategory(){
    this.subCategory.name = this.dataSub.value.name;
    this.subCategory.description = this.dataSub.value.description;
    this.subCategory.id_category = this.idCategory;
    this.saveSubCategorySubscription = this.subCategoryService.saveSubCategory(this.subCategory).subscribe({
      next: (res) => {
        this.cleanFormSubCategory();
        this.getListSubCategory();
      },
      error: (err) => {
        console.log(err);
      }
    });
  }

  cleanFormSubCategory(){
    this.dataSub.setValue({
      name: '',
      description: ''
    })
  }

  showModalSubCategory(){
    if(this.listIdCategory.length === 1){
      this.idCategory = this.listIdCategory[0];
      this.getListSubCategory();
      this.dataSub.setValue({
        name: '',
        description: ''
      })
      this.showSubCategory = true;
    }else if(this.listIdCategory.length === 0){
      this.msg = '¡Debe seleccionar un elemento!';
      this.modal_msg = true;
    }else{
      this.msg = '¡Solo puede editar las subcategorias de una categoría a la vez!';
      this.modal_msg = true;
    }
  }

  chargeSubCategory(subCat: SubCategory){
    if(subCat.id)
      this.idSubCategory = subCat.id;
    this.dataSub.setValue({
      name: subCat.name,
      description: subCat.description
    })
  }

  editSubCategory(){
    this.editSubCategorySubscription = this.subCategoryService.updateSubCategory(this.idSubCategory, this.dataSub.value).subscribe({
      next: (res) => {
        this.getListSubCategory();
        this.cleanFormSubCategory();
      },
      error: (err) => {
        console.log(err)
      }
    });
  }

  deleteSubCategory(){
    this.deleteSubCategorySubscription = this.subCategoryService.deleteSubCategory(this.idSubCategory).subscribe({
      next: (res) => {
        this.getListSubCategory();
        this.cleanFormSubCategory();
      },
      error: (err) => {
        console.log(err)
      }
    });
  }

  ngOnDestroy(): void {
    this.listSubscription?.unsubscribe();
    this.searchSubscription?.unsubscribe();
    this.deleteSubscription?.unsubscribe();
    this.listSubCategorySubscription?.unsubscribe();
    this.saveSubCategorySubscription?.unsubscribe();
    this.subCategorySubscription?.unsubscribe();
    this.editSubCategorySubscription?.unsubscribe();
    this.deleteSubCategorySubscription?.unsubscribe();
  }

}
