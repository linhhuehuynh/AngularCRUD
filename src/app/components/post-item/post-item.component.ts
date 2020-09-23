import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Post } from './../../models/Post';
import { PostService } from './../../services/post.service';

@Component({
  selector: 'app-post-item',
  templateUrl: './post-item.component.html',
  styleUrls: ['./post-item.component.css']
})

export class PostItemComponent implements OnInit {
  @Input() posts: Post[];
  @Output() deletePost: EventEmitter<Post> = new EventEmitter();
  @Output() updatePost: EventEmitter<Post> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  onDelete(post) {
    this.deletePost.emit(post);
  }

  onUpdate(post) {
    console.log(this.posts)
    this.updatePost.emit(post);
  }


}
