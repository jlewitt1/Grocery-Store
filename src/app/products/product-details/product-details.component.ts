import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../../shared/models/product.model';
import { ProductsService } from '../../shared/services/products.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  product: Product;

  constructor(private route: ActivatedRoute, private productsService: ProductsService, private router: Router) { }
      
    getBack(): void { 
        this.router.navigate(["/products"]);
    }

    ngOnInit() {
        this.route.params.subscribe(params => {
            this.product = this.productsService.getOneProduct(params.prodID);
        });
    }

    

    //method using "that"
    
    // ngOnInit() {
    //     let that = this;
    //     this.route.params.subscribe(function(params) { 
    //         that.product = that.productsService.getOneProduct(params.prodID);
    //         alert(that.product.productName);
    //     });
    // }



  //Other Method of binding using a callback function

//   ngOnInit() {
//     this.route.params.subscribe(this.setProduct.bind(this));
//   }

//   setProduct(params): void { 
//     // alert(params.prodID);
//     this.product = this.productsService.getOneProduct(params.prodID);
//     alert(this.product.productName);
//   }



}
