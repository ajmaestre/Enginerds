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
          path: '', 
          redirectTo: 'home-user',
          pathMatch: 'full' 
        }
      ]
  },
  {
    path: 'admin', component: AdminComponent
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
