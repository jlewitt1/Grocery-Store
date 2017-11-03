import { Component, OnInit, OnDestroy } from '@angular/core';
import { ProductsService } from '../../shared/services/products.service';
import { Product } from '../../shared/models/product.model';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})

export class ProductListComponent implements OnInit, OnDestroy {
    products: Product[]; 
    fontSize = 15;
    clickedImageSource: string;
    subscription: Subscription
    
  constructor(private productsService: ProductsService) { }

  ngOnInit(): void {
    // this.products = this.productsService.getProducts(); -->syncçhronous

    // this.productsService.getProducts2() -->promise
    //     .then(products => this.products = products)
    //     .catch(error => alert(error));

    this.subscription = this.productsService.getProducts3() // -->observable 
        .subscribe(products => this.products = products, error => alert(error.statusText));
  }

  ngOnDestroy(): void { 
      this.subscription.unsubscribe();
  }

  showPriceAverage(): void { 
    // this.productsService.getPriceAverage(this.products, avg => { 
    //     alert("Price Average: " + avg);
    // });   
    this.productsService.getPriceAverage2(this.products)
        .then(avg => alert("Price Average: " + avg))
        .catch(err => alert("Error: " + err));
  }
  
  showImage(imageSource: string): void { 
    this.clickedImageSource = imageSource  
  }

}
