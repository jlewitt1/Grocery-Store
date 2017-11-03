import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: "zeroSymbol"
})
export class ZeroSymbolPipe implements PipeTransform{ 
    transform(value:number, symbol: string = "---"): string { 
           return value ? value.toString() : symbol;
    }
}