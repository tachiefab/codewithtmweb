import { Component, OnInit, Inject, PLATFORM_ID, EventEmitter, Input, Output } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { CommentService } from 'src/app/core/services/comment/comment.service';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth/auth.service';

@Component({
  selector: 'app-comment-reply-form',
  templateUrl: './comment-reply-form.component.html',
  styleUrls: ['./comment-reply-form.component.css']
})
export class CommentReplyFormComponent implements OnInit {
  @Output() replyCommentCreated = new EventEmitter();
  @Input('parentCommentId') parentCommentId;
  isLoggedIn: boolean = false;
  commentForm: FormGroup;
  type: string;
  slug:string;
  parent_id:number;
  private req: any;
  private routeSub:any;

  constructor(
    private authService:AuthService,
    private commentService:CommentService,
    private formBuilder: FormBuilder, 
    private router: Router,
    private route: ActivatedRoute, 
    ) { }

    ngOnInit() {
      //  clear comment inputs
      this.clearCommentFormInputs();
  
      const token = this.authService.isLoggedIn();
      if (token) {
        this.isLoggedIn = token;
        // this.router.navigate(['/products/create']);
      }
    }

  get f() {
     return this.commentForm.controls; 
    }
 
  replyComment = () => {
    this.type = "post";
    this.routeSub = this.route.params.subscribe(params => {
      this.slug = params['slug']
      this.req = this.commentService.comment(  {
        type:this.type, 
        slug:this.slug, 
        parent_id: this.parentCommentId,
        content: this.f.content.value,
        name: this.f.name.value,
        email: this.f.email.value,
        website: this.f.website.value
      }).subscribe(data=>{
           this.replyCommentCreated.emit(data)
          //clear comment inputs
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

