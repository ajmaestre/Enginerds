import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostsComponent } from './posts.component';
import { PostsService } from './posts.service';
import { BlockService } from './block.service';
import { AddPostComponent } from './add-post/add-post.component';



@NgModule({
  declarations: [PostsComponent, AddPostComponent],
  imports: [
    CommonModule
  ],
  providers: [PostsService, BlockService]
})
export class PostsModule { }
