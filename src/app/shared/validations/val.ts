import { ValidatorFn } from '@angular/forms';

export class Val { 
    static required(errorMessage = "This field is required"): ValidatorFn { 
        return formControl => formControl.value === null || formControl.value === "" ? {[Val.key]:errorMessage} : null;
    }

    static minLength(length: number, errorMessage=`Length can't be shorter than ${length} chars`): ValidatorFn { 
        return formControl => formControl.value.length < length ? {[Val.key]:errorMessage} : null;
    }

    static maxLength(length: number, errorMessage=`Length can't exceed ${length} chars`): ValidatorFn { 
        return formControl => formControl.value.length > length ? {[Val.key]:errorMessage} : null;
    }

    static nonNegative(errorMessage=`This field can't be negative`): ValidatorFn { 
        return formControl => formControl.value < 0 ? {[Val.key]:errorMessage} : null;
    }

    private static _counter = 0;
    private static get key(): string { 
        return "error_" + Val._counter++;
    }
}