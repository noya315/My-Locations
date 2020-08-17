import { TemplatePortal } from '@angular/cdk/portal';
import { AfterViewInit, Component, TemplateRef, ViewChild, ViewContainerRef } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ToolbarService } from 'src/app/toolbar.service';
import { Category } from '../category';
import { LocationsService } from 'src/app/locations/locations.service';
import { CategoriesService } from '../categories.service';
import { ConfirmationDialogComponent } from 'src/app/confirmation-dialog/confirmation-dialog.component';
import { SubmitCategoryDialogComponent } from '../submit-category-dialog/submit-category-dialog.component';

const CATEGORIES_NAME = 'Categories';

@Component({
  selector: 'app-categories-page',
  templateUrl: './categories-page.component.html',
  styleUrls: ['./categories-page.component.scss']
})
export class CategoriesPageComponent implements AfterViewInit {
  title$: Observable<string>;
  categories$: Observable<Category[]>;
  isSelectCategory$: Observable<boolean>;
  selectedCategory$: Observable<Category>;
  @ViewChild('toolbarPortalContent') toolbarPortalContent: TemplateRef<any>;

  constructor(public dialog: MatDialog,
              private categoriesService: CategoriesService,
              private locationsService: LocationsService,
              private toolbarService: ToolbarService,
              private viewContainerRef: ViewContainerRef) {

    this.selectedCategory$ = this.categoriesService.selectedCategory.pipe(
      map((category) => category)
    );

    this.title$ = this.selectedCategory$.pipe(
      map(selectCategory => this.updateTitle(selectCategory))
    );

    this.isSelectCategory$ = this.selectedCategory$.pipe(
      map(selectCategory => this.updateActionContext(selectCategory))
    );

    this.categories$ = this.categoriesService.categories;
  }

  ngAfterViewInit(): void {
    const toolbarPortal = new TemplatePortal(this.toolbarPortalContent, this.viewContainerRef);
    this.toolbarService.setPortal(toolbarPortal);
  }

  private updateActionContext(selectedCategory: Category): boolean {
    return selectedCategory.name !== '';
  }

  private updateTitle(selectedCategory: Category): string {
    return selectedCategory.name || CATEGORIES_NAME;
  }

  private openDialog = (submitTask: string, callback: (category) => void) => {
    const selectedCategory = this.categoriesService.getSelectedCategory();
    const dialogRef = this.dialog.open(SubmitCategoryDialogComponent, {
      width: '250px',
      panelClass: 'no-padding-dialog',
      data: { name: selectedCategory.name, submitTask }
    });

    dialogRef.afterClosed().subscribe((categoryName) => {
      if (categoryName) {
        const category = new Category(categoryName);
        callback(category);
      }
    });
  }

  addCategoryProcess = () => this.openDialog('Add Category', this.addCategory);

  editCategoryProcess = () => this.openDialog('Edit Category', this.editCategory);

  addCategory = (category: Category) => {
    this.categoriesService.addCategory(category);
  }

  removeCategory = () => {
    const message = 'This action will remove each location related to this category,'
      + 'are you sure you want to continue?';

    const dialogRef = this.dialog.open(ConfirmationDialogComponent, {
      width: '250px',
      panelClass: 'confirmation',
      data: message
    });

    dialogRef.afterClosed().subscribe((answer) => {
      if (answer) {
        const selectedCategory = this.categoriesService.getSelectedCategory();
        this.locationsService.removeAllLocationsFromCategory(selectedCategory);
        this.categoriesService.removeCategory();
      }
    });
  }

  editCategory = (category: Category) => {
    this.categoriesService.editCategory(category);
  }

  viewDetails = () => {
    this.categoriesService.viewDetails();
  }

  selectCategory = (category: Category) => {
    this.categoriesService.selectCategory(category);
  }
}
