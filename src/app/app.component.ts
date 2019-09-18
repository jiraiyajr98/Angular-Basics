import { Component } from '@angular/core';
import { Post } from './components/post-list/post-model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  postsStored: Post[] = [];

  onPostAdded(post: Post)
  {
    this.postsStored.push(post);
  }

}
