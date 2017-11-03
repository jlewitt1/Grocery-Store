import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { CategoriesService } from '../shared/services/categories.service';
import { Category } from '../shared/models/category.model';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})

//data members
export class HomeComponent implements OnInit {
    isCollapsed = false;
    discount = 10;
    locale = "asia/jerusalem";
    currentDate= new Date();
    categories: Category[]; 
    // titleService: Title;
    
    
    //service -->title at top of tab
    //Dependency Injection
    constructor(private titleService: Title, private categoriesService: CategoriesService) {
        // this.titleService = titleService;
     }
     

  ngOnInit(): void {
    //   alert(this.titleService.getTitle());
      this.titleService.setTitle("Northwind");
      this.categories = this.categoriesService.getCategories();
    //   alert(this.titleService.getTitle());
      
  }
}
