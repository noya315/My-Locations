import { Component, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { SubmitCategoryDialogComponent }
from '../submit-category-dialog/submit-category-dialog.component';
import { ViewCategoryDetailsDialogComponent }
from '../view-category-details-dialog/view-category-details-dialog.component';
import { CategoriesStorageService } from '../categories-storage.service';
import { Category } from '../category';

const CATEGORIES_NAME = 'Categories';
@Component({
  selector: 'app-categories-manager',
  templateUrl: './categories-manager.component.html',
  styleUrls: ['./categories-manager.component.scss']
})
export class CategoriesManagerComponent {
  @Input() title:string;
  categories : Category[];
  currentCategory: Category;

  constructor(public dialog: MatDialog,
    private categoryStorageService: CategoriesStorageService) {
    this.title = CATEGORIES_NAME;
    this.currentCategory = new Category();
    this.categories = JSON.parse(this.categoryStorageService.getCategories());
  }

  addCategoryProccess = () => this.openDialog('Add Category', this.addCategory);

  editCategoryProccess = () => this.openDialog('Edit Category', this.editCategory);

  openDialog = (submitTask: string, callback: Function) => {
    const dialogRef = this.dialog.open(SubmitCategoryDialogComponent, {
      width:'250px',
      panelClass: 'no-padding-dialog',
      data: {name: this.currentCategory.name, submitTask: submitTask}
    });

    dialogRef.afterClosed().subscribe((categoryName) => {
      if(categoryName){
        callback(categoryName);
      }
    })
  }

  addCategory = (categoryName: string) => {
    const category = new Category(categoryName);
    this.categories.push(category);
    this.categoryStorageService.updateCategories(this.categories);
  }

  removeCategory = () => {
    const categoryIndex = this.categories.indexOf(this.currentCategory);
    this.categories.splice(categoryIndex,1);
    this.categoryStorageService.updateCategories(this.categories);
    this.resetCategory();
  }

  editCategory = (categoryName: string) => {
    const categoryIndex = this.categories.indexOf(this.currentCategory);
    this.categories[categoryIndex] = new Category(categoryName);
    this.currentCategory = this.categories[categoryIndex];
    this.title = categoryName;
    this.categoryStorageService.updateCategories(this.categories);
  }

  viewDetails = () => {
    const categoryName = this.currentCategory.name;
    const dialogRef = this.dialog.open(ViewCategoryDetailsDialogComponent, {
      width:'250px',
      panelClass: 'no-padding-dialog',
      data: {name: categoryName}
    });
  }
  
  chooseCategory = (category:Category) => {
    if(category.name !== this.currentCategory.name || (!this.currentCategory)){
      this.currentCategory = category;
      this.title = category.name;
    } else{
      this.resetCategory();
    }
    
  }

  resetCategory = () => {
    this.currentCategory = new Category();
    this.title = CATEGORIES_NAME;
  }
}
