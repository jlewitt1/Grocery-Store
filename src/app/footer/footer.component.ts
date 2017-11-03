import { Component, OnInit, OnChanges, SimpleChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy  {
    
    ngOnDestroy(): void{ 
        console.log("ngOnDestroy");
    }
    ngAfterViewChecked(): void { 
        console.log("ngAfterViewChecked");
    }

    ngAfterViewInit(): void { 
        console.log("ngAfterViewInit");
    }
    ngAfterContentChecked(): void { 
        console.log("ngAfterContentChecked");
    }

    ngAfterContentInit(): void { 
        console.log("ngAfterContentInit");
    }
    ngDoCheck(): void { 
        console.log(" ngDoCheck");
    }

    currentYear =new Date().getFullYear();
    
    ngOnChanges(changes:SimpleChanges): void { 
        console.log("ngOnChanges");
    }

  constructor() { }

  ngOnInit() {
    console.log("ngOnInit");
  }

}
