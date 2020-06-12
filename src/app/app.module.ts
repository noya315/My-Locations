import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { MatToolbarModule} from '@angular/material/toolbar';
import { MatCardModule} from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { FormsModule } from '@angular/forms';
import { MatRadioModule} from '@angular/material/radio';
import { MatIconModule } from '@angular/material/icon';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CategoryComponent } from './category/category.component';
import { CategoriesManagerComponent } from './categories-manager/categories-manager.component';
import { ViewCategoryDetailsDialogComponent } from './view-category-details-dialog/view-category-details-dialog.component';
import { SubmitCategoryDialogComponent } from './submit-category-dialog/submit-category-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    CategoryComponent,
    CategoriesManagerComponent,
    ViewCategoryDetailsDialogComponent,
    SubmitCategoryDialogComponent
  ],
  imports: [
    BrowserModule,
    MatToolbarModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatRadioModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
