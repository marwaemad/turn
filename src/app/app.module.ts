import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { LayoutComponent } from './layout/layout.component';
import { HeaderComponent } from './layout/header/header.component';

// ///// package
import { BsDropdownModule } from 'ngx-bootstrap';
import { HeaderService } from './layout/header/header.service';
import { AdsComponent } from './layout/ads/ads.component';
import { NavComponent } from './layout/nav/nav.component';
import { PostsComponent } from './posts/posts.component';
import { AddPostComponent } from './posts/add-post/add-post.component';
import { FancyImageUploaderModule } from 'ng2-fancy-image-uploader';
import { LoadpostComponent } from './posts/loadpost/loadpost.component';

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    HeaderComponent,
    AdsComponent,
    NavComponent,
    PostsComponent,
    AddPostComponent,
    LoadpostComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FancyImageUploaderModule,
    FormsModule,
    BsDropdownModule.forRoot(),

  ],
  providers: [HeaderService],
  bootstrap: [AppComponent]
})
export class AppModule { }
