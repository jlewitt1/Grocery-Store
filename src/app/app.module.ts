import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { CategoriesService } from './shared/services/categories.service';
import { ProductListComponent } from './products/product-list/product-list.component';
import { ProductsService } from './shared/services/products.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProductImageComponent } from './products/product-image/product-image.component';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ProductDetailsComponent } from './products/product-details/product-details.component';
import { SmileyPipe } from './shared/pipes/smiley.pipe';
import { ZeroSymbolPipe } from './shared/pipes/zero-symbol.pipe';
import { RandomColorDirective } from './shared/directives/random-color.directive';
import { HttpClientModule } from '@angular/common/http';
import "rxjs/Rx";
import { AddProductComponent } from './products/add-product/add-product.component';
import { ErrorComponent } from './error/error.component';
import { NgbModule }  from "@ng-bootstrap/ng-bootstrap";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MatInputModule, MatButtonModule, MatCheckboxModule, MatIconModule } from "@angular/material";

@NgModule({
  declarations: [ //components, directives, and pipes
    AppComponent,
    HeaderComponent,
    HomeComponent,
    FooterComponent,
    ProductListComponent,
    ProductImageComponent,
    PageNotFoundComponent,
    ProductDetailsComponent,
    SmileyPipe,
    ZeroSymbolPipe,
    RandomColorDirective,
    AddProductComponent,
    ErrorComponent
  ],
  imports: [ //all needed modules for using on all components/directives/pipes/etc.
    BrowserModule,
    BrowserAnimationsModule, 
    HttpClientModule,    
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    AppRoutingModule,
    NgbModule.forRoot(),
    MatInputModule,
    MatButtonModule,
    MatCheckboxModule,
    MatIconModule
  ],
  providers: [ //all services needed
    CategoriesService,
    ProductsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
