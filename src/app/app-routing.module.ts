import { NgModule } from '@angular/core';
import { RouterModule, Routes, ExtraOptions } from '@angular/router';
import { UserComponent } from './user/user.component';
import { AdminComponent } from './admin/admin.component';
import { HomeUserComponent } from './user/home-user/home-user.component';
import { BeginnerComponent } from './user/beginner/beginner.component';
import { SubscriptionComponent } from './user/subscription/subscription.component';
import { BlogComponent } from './user/blog/blog.component';
import { AboutComponent } from './user/about/about.component';
import { ContactComponent } from './user/contact/contact.component';
import { ArticleComponent } from './user/article/article.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ResourceComponent } from './user/resource/resource.component';
import { QuestionAndResponseComponent } from './user/question-and-response/question-and-response.component';
import { LoginComponent } from './user/login/login.component';
import { HomeAdminComponent } from './admin/home-admin/home-admin.component';
import { UsersComponent } from './admin/users/users.component';
import { CategoriesComponent } from './admin/categories/categories.component';
import { PostsComponent } from './admin/posts/posts.component';
import { CommentsComponent } from './admin/comments/comments.component';
import { RegisterComponent } from './user/register/register.component';
import { RouteGuardGuard } from './guards/route-guard.guard';
import { ProfileComponent } from './admin/profile/profile.component';
import { ProfileUserComponent } from './user/profile-user/profile-user.component';
import { AddPostComponent } from './admin/posts/add-post/add-post.component';


const routesOptions: ExtraOptions = {
  anchorScrolling: 'enabled',
  scrollPositionRestoration: 'enabled',
  scrollOffset: [0, 64],
}

const routes: Routes = [
  { 
    path: 'home', component: UserComponent, 
      children: [
        {
          path: 'home-user', 
          component: HomeUserComponent, 
        },
        {
          path: 'beginner-user', 
          component: BeginnerComponent, 
        },
        {
          path: 'subscription-user',
          component: SubscriptionComponent,
        },
        {
          path: 'blog-user',
          component: BlogComponent,
        },
        {
          path: 'about-user',
          component: AboutComponent,
        },
        {
          path: 'contact-user',
          component: ContactComponent,
        },
        {
          path: 'article-user',
          component: ArticleComponent,
        },
        {
          path: 'resource-user',
          component: ResourceComponent
        },
        {
          path: 'p-&-r-user',
          component: QuestionAndResponseComponent
        },
        {
          path: 'login-user',
          component: LoginComponent
        },
        {
          path: 'register-user', component: RegisterComponent
        },
        {
          path: 'profile-user', component: ProfileUserComponent
        },
        {
          path: '', 
          redirectTo: 'home-user',
          pathMatch: 'full' 
        }
      ]
  },
  {
    path: 'admin', component: AdminComponent, canActivate: [RouteGuardGuard], 
      children: [
        {
          path: 'admin-home', component: HomeAdminComponent
        },
        {
          path: 'users', component: UsersComponent
        },
        {
          path: 'categories', component: CategoriesComponent
        },
        {
          path: 'posts', component: PostsComponent
        },
        {
          path: 'comments', component: CommentsComponent
        },
        {
          path: 'profile', component: ProfileComponent
        },
        {
          path: 'add-post', component: AddPostComponent
        },
        {
          path: '', 
          redirectTo: 'admin-home',
          pathMatch: 'full' 
        }
      ]
  },
  {
    path: '', redirectTo: 'home', pathMatch: 'full'
  },
  { 
    path: '**', component: PageNotFoundComponent
  }
]


@NgModule({
  imports: [RouterModule.forRoot(routes, routesOptions)],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
