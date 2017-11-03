import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-product-image',
  templateUrl: './product-image.component.html',
  styleUrls: ['./product-image.component.css']
})
export class ProductImageComponent implements OnInit {
   @Input() imageSource: string;
   @Output() imageClicked = new EventEmitter<string>();

   userClickedMe(): void { 
    this.imageClicked.emit(this.imageSource);
   }

  constructor() { }

  ngOnInit() {
  }

}
