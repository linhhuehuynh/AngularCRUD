import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PostsComponent } from './components/posts/posts.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CreatePostsComponent } from './components/create-posts/create-posts.component';
import { UpdatePostsComponent } from './components/update-posts/update-posts.component';
import { PostItemComponent } from './components/post-item/post-item.component';


@NgModule({
  declarations: [
    AppComponent,
    PostsComponent,
    CreatePostsComponent,
    UpdatePostsComponent,
    PostItemComponent
  ],
  imports: [
  BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
