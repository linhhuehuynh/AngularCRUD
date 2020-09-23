import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {PostsComponent} from './components/posts/posts.component';
import { CreatePostsComponent } from './components/create-posts/create-posts.component';
import { UpdatePostsComponent } from './components/update-posts/update-posts.component';
import { ErrorComponent } from './components/error/error.component';

const routes: Routes = [
  {path:'', component: PostsComponent},
  {path:'create', component: CreatePostsComponent},
  // {path: '/:id', component: UpdatePostsComponent},
  {path:'**', component: ErrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],


exports: [RouterModule]
})
export class AppRoutingModule { }
