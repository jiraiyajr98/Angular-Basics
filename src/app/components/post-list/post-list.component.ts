import { Component, OnInit, OnDestroy, } from '@angular/core';
import { Post } from './post-model';
import { PostServiceService } from 'src/app/service/post-service.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit , OnDestroy{


  // posts = [
  //   { title: 'Post 1', description: 'This is Post 1' },
  //   { title: 'Post 2', description: 'This is Post 2' },
  //   { title: 'Post 3', description: 'This is Post 3' },
  //   { title: 'Post 4', description: 'This is Post 4' }
  // ];

  // @Input() posts: Post[] = [];
  posts: Post[] = [];
  private postSubscription: Subscription;

  constructor(public postService: PostServiceService) { }

  ngOnInit() {
    this.posts = this.postService.getPosts();

    this.postSubscription = this.postService.getPostUpdatedListener()
    .subscribe((posts: Post[]) => {

      this.posts = posts;

    });
  }

  ngOnDestroy() {
    this.postSubscription.unsubscribe();
  }

}
