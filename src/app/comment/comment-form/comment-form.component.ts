import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { CommentService } from 'src/app/core/services/comment/comment.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-comment-form',
  templateUrl: './comment-form.component.html',
  styleUrls: ['./comment-form.component.css']
})
export class CommentFormComponent implements OnInit {
  commentForm: FormGroup;
  type: string;
  
  private req: any;
  private routeSub:any;
  slug:string;

  constructor(
    private commentService:CommentService,
    private formBuilder: FormBuilder, 
    private router: Router,
    private route: ActivatedRoute, 
    ) { }

  ngOnInit() {
    this.commentForm = this.formBuilder.group({
      content: ['']
    });
  }

  get f() {
     return this.commentForm.controls; 
    }
  
  createComment = () => {
    this.type = "post";
    this.routeSub = this.route.params.subscribe(params => {
      this.slug = params['slug']
      this.req = this.commentService.comment(  {
        type:this.type, 
        slug:this.slug, 
        content: this.f.content.value
      }).subscribe(data=>{
        alert("comment created successfully")
      })
  })
  }




}

