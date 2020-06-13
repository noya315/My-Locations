import { Injectable } from '@angular/core';
import { Category } from './category';

const CATEGORIES_KEY = 'CATEGORIES';

@Injectable({
  providedIn: 'root'
})
export class CategoriesStorageService {
  constructor() {
    if(!this.getCategories())
      this.updateCategories([]);
  }

  getCategories = () => localStorage.getItem(CATEGORIES_KEY);

  updateCategories = (categories: Category[]) => 
    localStorage.setItem(CATEGORIES_KEY, JSON.stringify(categories));
}
