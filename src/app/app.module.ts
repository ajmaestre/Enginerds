import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { AdminComponent } from './admin/admin.component';
import { UserComponent } from './user/user.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeUserComponent } from './user/home-user/home-user.component';
import { FooterComponent } from './user/footer/footer.component';
import { NavComponent } from './user/nav/nav.component';
import { BeginnerComponent } from './user/beginner/beginner.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { LateralMenuComponent } from './user/lateral-menu/lateral-menu.component';
import { AboutComponent } from './user/about/about.component';
import { ArticleComponent } from './user/article/article.component';
import { BlogComponent } from './user/blog/blog.component';
import { ContactComponent } from './user/contact/contact.component';
import { SubscriptionComponent } from './user/subscription/subscription.component';
import { CodeComponent } from './svg/code/code.component';
import { AlgorithmComponent } from './svg/algorithm/algorithm.component';
import { DataAnalysisComponent } from './svg/data-analysis/data-analysis.component';
import { DatabaseComponent } from './svg/database/database.component';
import { FixedComponent } from './svg/fixed/fixed.component';
import { ResponsiveComponent } from './svg/responsive/responsive.component';
import { FreeComponent } from './svg/free/free.component';
import { LimitComponent } from './svg/limit/limit.component';
import { IlimitComponent } from './svg/ilimit/ilimit.component';
import { AvatarComponent } from './svg/avatar/avatar.component';
import { MessageComponent } from './svg/message/message.component';
import { SupportComponent } from './svg/support/support.component';
import { WhoComponent } from './svg/who/who.component';
import { ResourceComponent } from './user/resource/resource.component';
import { SourceComponent } from './svg/source/source.component';
import { ImageComponent } from './svg/image/image.component';
import { TextFileComponent } from './svg/text-file/text-file.component';
import { VideoComponent } from './svg/video/video.component';
import { LoginComponent } from './user/login/login.component';
import { HomeAdminComponent } from './admin/home-admin/home-admin.component';
import { HeaderComponent } from './admin/header/header.component';
import { MenuComponent } from './admin/menu/menu.component';
import { UsersComponent } from './admin/users/users.component';
import { CategoriesComponent } from './admin/categories/categories.component';
import { PostsComponent } from './admin/posts/posts.component';
import { CommentsComponent } from './admin/comments/comments.component';
import { RegisterComponent } from './user/register/register.component';
import { RegisterUsersComponent } from './admin/register-users/register-users.component';
import { UpdateUsersComponent } from './admin/update-users/update-users.component';
import { AddCategoryComponent } from './admin/categories/add-category/add-category.component';
import { ProfileComponent } from './admin/profile/profile.component';
import { ProfileUserComponent } from './user/profile-user/profile-user.component';
import { PageAdminComponent } from './admin/page-admin/page-admin.component';
import { AddPostComponent } from './admin/posts/add-post/add-post.component';

@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    UserComponent,
    HomeUserComponent,
    FooterComponent,
    NavComponent,
    BeginnerComponent,
    AboutComponent,
    ArticleComponent,
    BlogComponent,
    ContactComponent,
    SubscriptionComponent,
    PageNotFoundComponent,
    LateralMenuComponent,
    CodeComponent,
    AlgorithmComponent,
    DataAnalysisComponent,
    DatabaseComponent,
    FixedComponent,
    ResponsiveComponent,
    FreeComponent,
    LimitComponent,
    IlimitComponent,
    AvatarComponent,
    MessageComponent,
    SupportComponent,
    WhoComponent,
    ResourceComponent,
    SourceComponent,
    ImageComponent,
    TextFileComponent,
    VideoComponent,
    LoginComponent,
    HomeAdminComponent,
    HeaderComponent,
    MenuComponent,
    UsersComponent,
    CategoriesComponent,
    PostsComponent,
    CommentsComponent,
    RegisterComponent,
    RegisterUsersComponent,
    UpdateUsersComponent,
    AddCategoryComponent,
    ProfileComponent,
    ProfileUserComponent,
    PageAdminComponent,
    AddPostComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
