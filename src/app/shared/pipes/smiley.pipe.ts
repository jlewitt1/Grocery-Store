import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: "smiley"
})
export class SmileyPipe implements PipeTransform{ 
    transform(value:number): string { 
           return value ? ":-)" : ":-(";
    }
}