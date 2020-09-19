import { BlogService } from './../../core/services/blog/blog.service';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { CommentService } from 'src/app/core/services/comment/comment.service';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthUserService } from 'src/app/shared/utility/authUser.service';

@Component({
  selector: 'app-comment-form',
  templateUrl: './comment-form.component.html',
  styleUrls: ['./comment-form.component.css']
})
export class CommentFormComponent implements OnInit {
  @Output() commentCreated = new EventEmitter();
  @Output() articleCommentCount = new EventEmitter();
  @Input('parentCommentId') parentCommentId;
  isLoggedIn: boolean = false;
  commentForm: FormGroup;
  type: string;
  slug:string;
  private req: any;
  private routeSub:any;

  constructor(
    private userAuthService:AuthUserService,
    private blogService:BlogService,
    private commentService:CommentService,
    private formBuilder: FormBuilder, 
    private router: Router,
    private route: ActivatedRoute, 
    ) { }

  ngOnInit() {
    //  clear comment inputs
    this.clearCommentFormInputs();

    const token = this.userAuthService.isLoggedIn();
    if (token) {
      this.isLoggedIn = token;
      // this.router.navigate(['/products/create']);
    }
  }

  get f() {
     return this.commentForm.controls; 
    }
  
  createNewComment = () => {
    this.type = "post";
    this.routeSub = this.route.params.subscribe(params => {
      this.slug = params['slug']
      this.req = this.commentService.comment(  {
        type:this.type, 
        slug:this.slug, 
        content: this.f.content.value,
        name: this.f.name.value,
        email: this.f.email.value,
        website: this.f.website.value
      }).subscribe(data=>{
           this.commentCreated.emit(data);
            // getting article from database
           this.req = this.blogService.getOne(this.slug).subscribe(data=>{
            this.articleCommentCount.emit(data.comment_count);
          })
          //  clear comment inputs
          this.clearCommentFormInputs();
      })
  })
  }

  clearCommentFormInputs = () => {
    this.commentForm = this.formBuilder.group({
      content: [''],
      name: [''],
      email: [''],
      website: ['']
    });
  }


}

