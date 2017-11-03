import { ValidatorFn } from "@angular/forms";
import { Val } from "../validations/val";

export class Product {  
    //import data
    constructor(public productID: number, public productName: string, public unitPrice: number, 
        public unitsInStock:number, public unitsOnOrder: number)
     { }

     static get productNameValidators(): ValidatorFn[] { 
         return [
             Val.required("Missing product name"),
             Val.minLength(4, `Product name can't be shorter than 4 chars`),
             Val.maxLength(20, `Product  name can't exceed 20 chars`)
         ];
     }

     static get unitPriceValidators(): ValidatorFn[] { 
         return [
            Val.required(),
            Val.nonNegative()
         ];
     }

     static get unitsInStockValidators(): ValidatorFn[] { 
        return [
           Val.nonNegative()
        ];
    }

    static get unitsOnOrderValidators(): ValidatorFn[] { 
        return [
           Val.nonNegative()
        ];
    }
}