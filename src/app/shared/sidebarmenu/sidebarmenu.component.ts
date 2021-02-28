import { Component, OnInit} from '@angular/core';
import { CategoryService } from './../services/category.service';

@Component({
  selector: 'app-sidebarmenu',
  templateUrl: './sidebarmenu.component.html',
  styleUrls: ['./sidebarmenu.component.css']
})
export class SidebarmenuComponent implements OnInit {
  categoryLists: any;

  constructor(private categoryService:CategoryService) {
      this.getCategories();
   }

  getCategories = () => {
    this.categoryService.getAll().subscribe(
      data => {
        this.categoryLists = data.results;
        // console.log(this.categoryLists)
      },
      error => {
        console.log(error);
      }
    );
  }

  ngOnInit(): void {
  }

}
