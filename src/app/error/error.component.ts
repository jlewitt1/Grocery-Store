import { Component, Input, AfterContentChecked} from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.css']
})
export class ErrorComponent implements AfterContentChecked {

    @Input() controlToValidate: FormControl;

    errors: Array<string>;

    ngAfterContentChecked(): void { 
        this.errors = new Array<string>();
    
        for(var key in this.controlToValidate.errors) { 
            if (this.controlToValidate.touched && this.controlToValidate.dirty && this.controlToValidate.invalid) { 
                this.errors.push(this.controlToValidate.errors[key]);
            }
        }        
    }

}
