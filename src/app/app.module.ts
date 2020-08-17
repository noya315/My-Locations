import { PortalModule } from '@angular/cdk/portal';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { GoogleMapsModule } from '@angular/google-maps';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CategoriesPageComponent } from './categories/categories-page/categories-page.component';
import { CategoryComponent } from './categories/category/category.component';
import { GroupByCategoryComponent } from './categories/group-by-category/group-by-category.component';
import { SubmitCategoryDialogComponent } from './categories/submit-category-dialog/submit-category-dialog.component';
import { ViewCategoryDetailsDialogComponent } from './categories/view-category-details-dialog/view-category-details-dialog.component';
import { FilterComponent } from './filter/filter.component';
import { GroupByComponent } from './group-by/group-by.component';
import { LocationComponent } from './locations/location/location.component';
import { LocationsPageComponent } from './locations/locations-page/locations-page.component';
import { SubmitLocationDialogComponent } from './locations/submit-location-dialog/submit-location-dialog.component';
import { ViewLocationDetailsDialogComponent } from './locations/view-location-details-dialog/view-location-details-dialog.component';
import { MapComponent } from './map/map.component';
import { SortComponent } from './sort/sort.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { LocationsListComponent } from './locations/locations-list/locations-list.component';
import { ConfirmationDialogComponent } from './confirmation-dialog/confirmation-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    CategoryComponent,
    ViewCategoryDetailsDialogComponent,
    LocationComponent,
    ViewLocationDetailsDialogComponent,
    GroupByCategoryComponent,
    ToolbarComponent,
    CategoriesPageComponent,
    LocationsPageComponent,
    SubmitCategoryDialogComponent,
    SubmitLocationDialogComponent,
    FilterComponent,
    SortComponent,
    GroupByComponent,
    MapComponent,
    LocationsListComponent,
    ConfirmationDialogComponent,
  ],
  imports: [
    BrowserModule,
    MatToolbarModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    MatDialogModule,
    MatSelectModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    MatRadioModule,
    MatAutocompleteModule,
    MatCheckboxModule,
    BrowserAnimationsModule,
    PortalModule,
    AppRoutingModule,
    GoogleMapsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
