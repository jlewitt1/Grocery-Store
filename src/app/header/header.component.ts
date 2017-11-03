import { Component, OnInit, AfterViewChecked, AfterViewInit  } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
    
    ngAfterViewChecked(): void { 
        console.log("ngAfterViewChecked");
    }
    ngAfterViewInit(): void { 
        console.log("ngAfterViewInit");
    }  
  constructor() { }

    ngOnInit() {
        console.log("ngOnInit");    
    }

}
