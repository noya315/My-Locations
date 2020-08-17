import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { Category } from './category';
import { LocalStorageBehaviorSubject } from '../local-storage-behavior-subject';
import { MatDialog } from '@angular/material/dialog';
import { ViewCategoryDetailsDialogComponent } from './view-category-details-dialog/view-category-details-dialog.component';
import { LocationsService } from '../locations/locations.service';

const CATEGORIES_KEY = 'Categories';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  private categories$: LocalStorageBehaviorSubject<Category[]>;
  private selectedCategory$: BehaviorSubject<Category>;

  constructor(public dialog: MatDialog, private locationsService: LocationsService) {
    this.categories$ = new LocalStorageBehaviorSubject<Category[]>(CATEGORIES_KEY, []);
    this.selectedCategory$ = new BehaviorSubject<Category>(new Category());
  }

  get categories(): Observable<Category[]> {
    return this.categories$.asObservable();
  }

  get selectedCategory(): Observable<Category> {
    return this.selectedCategory$.asObservable();
  }

  private saveCategories(categories: Category[]) {
    this.categories$.next(categories);
  }

  private resetCategory = () => {
    this.selectedCategory$.next(new Category());
  }

  public getCategories(): Category[] {
    return this.categories$.value;
  }

  public getSelectedCategory(): Category {
    return this.selectedCategory$.value;
  }

  public addCategory = (category: Category) => {
    const categories = this.getCategories();
    categories.push(category);
    this.saveCategories(categories);
  }

  public removeCategory = () => {
    let categories = this.getCategories();
    const selectedCategory = this.getSelectedCategory();
    categories = categories.filter((cat) => cat !== selectedCategory);
    this.saveCategories(categories);
    this.resetCategory();
  }

  public editCategory = (category: Category) => {
    const categories = this.getCategories();
    const selectedCategory = this.getSelectedCategory();
    const categoryIndex = categories.findIndex((cat) => cat === selectedCategory);
    if (categoryIndex !== -1) {
      this.locationsService.updateAllLocationToCategory(selectedCategory, category);
      categories[categoryIndex] = category;
      this.selectedCategory$.next(category);
      this.saveCategories(categories);
    }
  }

  public selectCategory = (category: Category) => {
    const selectedCategory = this.getSelectedCategory();
    if (category.name !== selectedCategory.name || (!selectedCategory)) {
      this.selectedCategory$.next(category);
    } else {
      this.selectedCategory$.next(new Category());
    }
  }

  public viewDetails = () => {
    const selectedCategory = this.getSelectedCategory();
    this.dialog.open(ViewCategoryDetailsDialogComponent, {
      minWidth: '250px',
      panelClass: 'no-padding-dialog',
      data: { name: selectedCategory.name }
    });
  }
}
