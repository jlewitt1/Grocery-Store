import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { ProductListComponent } from "./products/product-list/product-list.component";
import { ProductDetailsComponent } from "./products/product-details/product-details.component";
import { NgModule } from "@angular/core";
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";
import { AddProductComponent } from "./products/add-product/add-product.component";


//list of routes
const appRoutes: Routes =[
    { path: "home", component: HomeComponent },
    { path: "products", component: ProductListComponent },        
    { path: "products/new", component: AddProductComponent},
    { path: "products/:prodID", component: ProductDetailsComponent },
    
    // { path: "admin",loadChildren: "./admin/admin.module#AdminModule"}, //admin.module = file name, AdminModule = module name
    
    //Child Routes
    // { path: "suppliers", component: SuppliersHomeComponent, children: [ // suppliers
    //     { path: "", component: SuppliersListComponent, children: [ // suppliers
    //         { path: "retail", component: RetailComponent }, // suppliers/retail
    //         { path: "wholesaler", component: WholesalerComponent }, // suppliers/wholesaler            
    //     ]}, 
    // ]},

    { path: "", redirectTo: "/home", pathMatch: "full" },
    { path: "**", component: PageNotFoundComponent }
];

//module router
const appRouter = RouterModule.forRoot(appRoutes);

@NgModule({ 
    imports: [appRouter]
})
export class AppRoutingModule {}