import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from 'src/app/shared/shared.module';
import { CategoryComponent } from './category/category.component';
import { CategoriesPageComponent } from './categories-page/categories-page.component';
import { SubmitCategoryDialogComponent } from './submit-category-dialog/submit-category-dialog.component';
import { ViewCategoryDetailsDialogComponent } from './view-category-details-dialog/view-category-details-dialog.component';



@NgModule({
  declarations: [
    CategoryComponent,
    CategoriesPageComponent,
    SubmitCategoryDialogComponent,
    ViewCategoryDetailsDialogComponent,
  ],
  entryComponents: [
    CategoryComponent,
    CategoriesPageComponent,
    SubmitCategoryDialogComponent,
    ViewCategoryDetailsDialogComponent,
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    CategoryComponent,
    CategoriesPageComponent,
    SubmitCategoryDialogComponent,
    ViewCategoryDetailsDialogComponent
  ],
})
export class CategoriesModule { }
