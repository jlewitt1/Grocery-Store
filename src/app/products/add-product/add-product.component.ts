import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { Product} from '../../shared/models/product.model';


@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent {

    productForm: FormGroup; 

    constructor(private formBuilder: FormBuilder) {
        this.createForm();
    }
    
    createForm(): void { 
        this.productForm = this.formBuilder.group({ 
            productNameControl: ["", Product.productNameValidators],
            unitPriceControl:["", Product.unitPriceValidators],
            unitsInStockControl: ["", Product.unitsInStockValidators],
            unitsOnOrderControl: ["", Product.unitsOnOrderValidators]
        });


        // let productNameControl = new FormControl("", Product.productNameValidators);
        // let unitPriceControl = new FormControl("", Product.unitPriceValidators);
        // let unitsInStockControl = new FormControl("", Product.unitsInStockValidators);
        // let unitsOnOrderControl = new FormControl("", Product.unitsOnOrderValidators);
        // this.productForm = new FormGroup({
        //     productNameControl, 
        //     unitPriceControl,
        //     unitsInStockControl,
        //     unitsOnOrderControl
        // });
    }

    addProduct(): void { 
        let productName = this.productForm.get("productNameControl").value;
        let unitPrice = this.productForm.get("unitPriceControl").value;
        let unitsInStock = this.productForm.get("unitsInStockControl").value;        
        let unitsOnOrder = this.productForm.get("unitsOnOrderControl").value;
        
        let product = new Product(0, productName, unitPrice, unitsInStock,unitsOnOrder);

        alert(JSON.stringify(product));
    }

}
