import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { PostsService } from './posts.service';
import { Post } from 'src/app/interfaces/post';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit, OnDestroy {

  listPostSubscription!: Subscription;
  imageSubscription!: Subscription;

  listPost: Post[] = [];

  constructor(private postService: PostsService, private sanitizer: DomSanitizer) { }

  ngOnInit(): void {
    this.getPosts();
  }

  getPosts(){
    this.listPostSubscription = this.postService.getPosts().subscribe({
      next: (res: Post[]) => {
        this.listPost = res;
        this.listPost.forEach(post => {
          if(post.image)
            this.getImage(post.image, post);
        })
      },
      error: (err) => {
        console.log(err);
      }
    });
  }

  getImage(image: SafeUrl, post: Post){
    this.imageSubscription = this.postService.getImage(image).subscribe({
      next: (res: Blob) => {
        post.image = this.sanitizer.bypassSecurityTrustUrl(URL.createObjectURL(res));
      },
      error: (err) => {
        console.log(err);
      }
    })
  }

  ngOnDestroy(): void {
    this.listPostSubscription?.unsubscribe();
    this.imageSubscription?.unsubscribe();
  }

}
