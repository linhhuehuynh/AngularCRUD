import { Component, OnInit } from '@angular/core';
import {PostService} from '../../services/post.service';
import {Post} from '../../models/Post';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  posts:Post[];

  
  constructor(private postService:PostService) { }

  ngOnInit() {
    this.postService.getPosts().subscribe(posts => {
      this.posts = posts;
    });

  }

  addPost(post:Post){
    this.postService.addPost(post).subscribe(post => {
      this.posts.push(post);
    })
  }
  

  updatePost(post:Post){
    this.postService.updatePost(post).subscribe(post => {
      console.log(post)
    })
  }

  deletePost(post:Post){
    this.posts = this.posts.filter(p => p.id != post.id);
    this.postService.deletePost(post).subscribe();
  }

}
