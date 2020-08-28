import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { CommentService } from 'src/app/core/services/comment/comment.service';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth/auth.service';

@Component({
  selector: 'app-comment-form',
  templateUrl: './comment-form.component.html',
  styleUrls: ['./comment-form.component.css']
})
export class CommentFormComponent implements OnInit {
  @Output() commentCreated = new EventEmitter();
  @Input('parentCommentId') parentCommentId;
  isLoggedIn: boolean = false;
  commentForm: FormGroup;
  type: string;
  slug:string;
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
           this.commentCreated.emit(data)
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

