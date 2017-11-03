import { Category } from '../models/category.model';

export class CategoriesService { 
    getCategories(): Category[] { 
        let categories = new Array<Category>();
        
        categories.push(new Category(1,"Beverages"));
        categories.push(new Category(2,"Condiments"));
        categories.push(new Category(3,"Confections"));
        categories.push(new Category(4,"Dairy Products"));
        categories.push(new Category(5,"Grains/Cereals"));
        categories.push(new Category(6,"Meat/Poultry"));
        categories.push(new Category(7,"Produce"));
        categories.push(new Category(8,"Seafood"));
    
        return categories;

    }
}