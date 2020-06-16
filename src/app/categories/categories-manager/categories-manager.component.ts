import { Component, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import { SubmitCategoryDialogComponent }
from '../submit-category-dialog/submit-category-dialog.component';
import { ViewCategoryDetailsDialogComponent }
from '../view-category-details-dialog/view-category-details-dialog.component';
import { CategoriesStorageService } from '../categories-storage.service';
import { Category } from '../category';
import { ThrowStmt } from '@angular/compiler';

const CATEGORIES_NAME = 'Categories';

@Component({
  selector: 'app-categories-manager',
  templateUrl: './categories-manager.component.html',
  styleUrls: ['./categories-manager.component.scss']
})
export class CategoriesManagerComponent {
  @Input() title:string;
  categories$ : Observable<Category[]>;
  currentCategory: Category;

  constructor(public dialog: MatDialog,
    private categoriesStorageService: CategoriesStorageService) {
    this.title = CATEGORIES_NAME;
    this.currentCategory = new Category();
    this.categories$ = this.categoriesStorageService.getCategories();
  }

  addCategoryProcess = () => this.openDialog('Add Category', this.addCategory);

  editCategoryProcess = () => this.openDialog('Edit Category', this.editCategory);

  openDialog = (submitTask: string, callback: Function) => {
    const dialogRef = this.dialog.open(SubmitCategoryDialogComponent, {
      width:'250px',
      panelClass: 'no-padding-dialog',
      data: {name: this.currentCategory.name, submitTask: submitTask}
    });

    dialogRef.afterClosed().subscribe((categoryName) => {
      if(categoryName)
        callback(categoryName);
    });
  }

  addCategory = (categoryName: string) => {
    const category = new Category(categoryName);
    this.categoriesStorageService.addCategory(category);
  }

  removeCategory = () => {
    this.categoriesStorageService.removeCategory(this.currentCategory);
    this.resetCategory();
  }

  editCategory = (categoryName: string) => {
    const newCategory = new Category(categoryName);
    this.categoriesStorageService.editCategory(this.currentCategory, newCategory);
    this.currentCategory = newCategory;
    this.title = categoryName;
  }

  viewDetails = () => {
    const categoryName = this.currentCategory.name;
    this.dialog.open(ViewCategoryDetailsDialogComponent, {
      minWidth:'250px',
      panelClass: 'no-padding-dialog',
      data: {name: categoryName}
    });
  }
  
  chooseCategory = (category:Category) => {
    if(category.name !== this.currentCategory.name || (!this.currentCategory)){
      this.currentCategory = category;
      this.title = category.name;
    } else {
      this.resetCategory();
    }
  }

  resetCategory = () => {
    this.currentCategory = new Category();
    this.title = CATEGORIES_NAME;
  }
}
