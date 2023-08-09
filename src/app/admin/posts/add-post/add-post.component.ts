import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { SubCategory } from 'src/app/interfaces/subcategory';
import { PostsService } from '../posts.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.css']
})
export class AddPostComponent implements OnInit, OnDestroy {

  listSubCategorySubscription!: Subscription;
  savePostSubscription!: Subscription;
  listSubCategory: SubCategory[] = [];

  subCatSelected: string = 'subcategoria';

  dataPost: FormGroup;
  imagePost!: Blob;

  constructor(private postService: PostsService) { 
    this.dataPost = new FormGroup({
      title: new FormControl('', Validators.required), 
      brief: new FormControl('', Validators.required), 
      introduction: new FormControl('', Validators.required),
      conclusion: new FormControl('', Validators.required),
      subcategory_id: new FormControl('', Validators.required),
    });
  }

  ngOnInit(): void {
    this.getListSubCategory();
  }

  getListSubCategory(){
    this.listSubCategorySubscription = this.postService.getSubCategories().subscribe({
      next: (res: SubCategory[]) => {
        this.listSubCategory = res;
      },
      error: (err) => {
        console.log(err);
      }
    });
  }

  onLoad(event: Event): void {
    const element = event.target as HTMLInputElement;
    const file = element.files?.item(0);
    if (file) {
      this.imagePost = file;
    }
  }

  savePost(){
    this.savePostSubscription = this.postService.savePost(this.dataPost.value, this.imagePost).subscribe({
      next: (res) => {
        console.log(res);
      },
      error: (err) => {
        console.log(err);
      }
    });
  }

  ngOnDestroy(): void {
    this.listSubCategorySubscription?.unsubscribe();  
    this.savePostSubscription?.unsubscribe();
  }

}
