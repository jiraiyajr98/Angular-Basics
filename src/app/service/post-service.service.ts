import { Injectable } from '@angular/core';
import { Post } from '../components/post-list/post-model';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostServiceService {

  private posts: Post[] = [];
  private postUpdated = new Subject<Post[]>();

  constructor() { }

  getPosts() {

    return [...this.posts];

  }

  addPost(post: Post) {

    this.posts.push(post);
    this.postUpdated.next([...this.posts]);
  }

  getPostUpdatedListener() {

    return this.postUpdated.asObservable();

  }

}
