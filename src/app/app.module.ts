import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { MatToolbarModule} from '@angular/material/toolbar';
import { MatCardModule} from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatRadioModule} from '@angular/material/radio';
import { MatIconModule } from '@angular/material/icon';
import { MatAutocompleteModule } from '@angular/material/autocomplete';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CategoryComponent } from './categories/category/category.component';
import { CategoriesManagerComponent } 
from './categories/categories-manager/categories-manager.component';
import { LocationsManagerComponent } 
from './locations/locations-manager/locations-manager.component'
import { ViewCategoryDetailsDialogComponent } 
from './categories/view-category-details-dialog/view-category-details-dialog.component';
import { SubmitCategoryDialogComponent } 
from './categories/submit-category-dialog/submit-category-dialog.component';
import { ManagerComponent } from './manager/manager.component';
import { LocationComponent } from './locations/location/location.component';
import { SubmitLocationDialogComponent } from './locations/submit-location-dialog/submit-location-dialog.component';
import { ViewLocationDetailsDialogComponent } from './locations/view-location-details-dialog/view-location-details-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    CategoryComponent,
    CategoriesManagerComponent,
    LocationsManagerComponent,
    ViewCategoryDetailsDialogComponent,
    SubmitCategoryDialogComponent,
    ManagerComponent,
    LocationComponent,
    SubmitLocationDialogComponent,
    ViewLocationDetailsDialogComponent
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
    ReactiveFormsModule,
    MatRadioModule,
    MatAutocompleteModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
