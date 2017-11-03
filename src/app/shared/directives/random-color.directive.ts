import { Directive, ElementRef, Renderer2, OnInit } from "@angular/core";

@Directive({
    selector: "[randomColor]"
})

export class RandomColorDirective implements OnInit{
    constructor(private elementRef: ElementRef, private renderer: Renderer2) {}

    ngOnInit(): void{ 
        let color = this.getRandomColor();
        // this.elementRef.nativeElement.style.color = color;
        this.renderer.setStyle(this.elementRef.nativeElement, "color",color);
    }
    
    private getRandomColor(): string { 
        let red = Math.floor(256* Math.random());
        let green = Math.floor(256* Math.random());
        let blue = Math.floor(256* Math.random());
        let color = `rgb(${red},${green},${blue})`;
        return color;
    }
}