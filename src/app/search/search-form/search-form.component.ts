import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
// import { BlogService } from 'src/app/core/services/blog/blog.service';

@Component({
  selector: 'app-search',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.css']
})
export class SearchFormComponent implements OnInit {
  searchForm: FormGroup;
  private req: any;
  private routeSub:any;
  query:string;

  constructor(
              // private route: ActivatedRoute, 
              private router: Router,
              private formBuilder: FormBuilder,
              // private blogService:BlogService
             ) { }

  loadSearchForm() {
    this.searchForm = this.formBuilder.group({
      searchQuery: ['', Validators.required]
    });   
}

// search = () => {
//   this.routeSub = this.route.params.subscribe(params => {
//     this.query = this.searchForm.value['searchQuery']
//     this.req = this.blogService.getAll('/?q=' + this.query).subscribe(data=>{
//       console.log(data.results)
//       // this.postList = data.results;
//       // this.nextUrl = data.next;
//     })
// })
// }

submitSearch = () =>{
  this.query = this.searchForm.value['searchQuery']
  if (this.query){
     this.router.navigate(['/search', {q: this.query}])
  }
}

clearSearchFormInputs = () => {
  this.searchForm = this.formBuilder.group({
    searchQuery: ['']
  });
}

  ngOnInit(): void {
      // load subscribe form
      this. loadSearchForm();
      //  clear subscribe inputs
      this.clearSearchFormInputs();
  }

}
