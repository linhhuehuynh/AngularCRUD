import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-create-posts',
  templateUrl: './create-posts.component.html',
  styleUrls: ['./create-posts.component.css']
})
export class CreatePostsComponent implements OnInit {
  @Output() addPost: EventEmitter<any> = new EventEmitter();

  title:string;
  body:string

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit() {
    const post = {
      title: this.title,
      body: this.body
    }
    this.addPost.emit(post);
  }

}
