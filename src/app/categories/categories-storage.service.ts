import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Category } from './category';
import { StorageManagerService } from '../storage-manager.service';

const CATEGORIES_KEY = "Categories";
@Injectable({
  providedIn: 'root'
})
export class CategoriesStorageService {
  private categories$ : BehaviorSubject<Category[]>;
  
  constructor(private storageManagerService: StorageManagerService) {
    this.categories$ = new BehaviorSubject(this.getCategoriesFromStorage());
  }

  getCategories(): Observable<Category[]>{
    return this.categories$;
  }

  addCategory(category: Category): void{
    const categories = this.categories$.value;
    categories.push(category);
    this.setCategoriesToStorage(categories);
    this.categories$.next(categories);
  }

  removeCategory(category: Category): void{
    const newCategories = this.categories$.value.filter((cat) => cat !== category);
    this.setCategoriesToStorage(newCategories);
    this.categories$.next(newCategories);
  }

  editCategory(currentCategory: Category, newCategory:Category): void{
    const categories = this.categories$.value;
    const categoryIndex = categories.findIndex((category) => category === currentCategory);
    console.log(currentCategory, newCategory, categoryIndex);
    if(categoryIndex !== -1){
      categories[categoryIndex] = newCategory;
      this.setCategoriesToStorage(categories);
      this.categories$.next(categories);
    }
  }

  private getCategoriesFromStorage(): Category[]{
    return this.storageManagerService.getEntity(CATEGORIES_KEY) || [];
  }

  private setCategoriesToStorage(locations: Category[]): void{
    this.storageManagerService.setEntity(CATEGORIES_KEY, locations);
  }
}
