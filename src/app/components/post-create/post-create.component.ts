import { Component, OnInit} from '@angular/core';
import { Post } from '../post-list/post-model';
import { NgForm } from '@angular/forms';
import { PostServiceService } from 'src/app/service/post-service.service';

@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.css']
})
export class PostCreateComponent implements OnInit {

  enteredMessage = '';
  enteredTitle = '';
  // @Output() postCreated = new EventEmitter<Post>();

  constructor(public postService: PostServiceService) { }

  ngOnInit() {
  }

  showAlert(form: NgForm) {

    // const post: Post = {
    //   title: this.enteredTitle,
    //   description: this.enteredMessage
    // };

    if (form.invalid) {
      return;
    }

    const post: Post = {
      title: form.value.title,
      description: form.value.messageEntered
    };

    // this.postCreated.emit(post);
    this.postService.addPost(post);

    form.resetForm();


  }


}
