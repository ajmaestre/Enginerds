import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserService } from './user.service';
import { UserComponent } from './user.component';
import { SubscriptionComponent } from './subscription/subscription.component';
import { BlogComponent } from './blog/blog.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { ArticleComponent } from './article/article.component';
import { LateralMenuComponent } from './lateral-menu/lateral-menu.component';



@NgModule({
  declarations: [UserComponent, SubscriptionComponent, BlogComponent, AboutComponent, ContactComponent, ArticleComponent, LateralMenuComponent],
  imports: [
    CommonModule
  ],
  providers: [UserService]
})
export class UserModule { }
