import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
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
    ResponsiveComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
