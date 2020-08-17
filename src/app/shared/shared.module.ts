import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';

import { PortalModule } from '@angular/cdk/portal';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { FilterComponent } from './filter/filter.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LocationComponent } from 'src/app/locations/location/location.component';
import { LocationsListComponent } from 'src/app/locations/locations-list/locations-list.component';

import { MapComponent } from './map/map.component';
import { SortComponent } from './sort/sort.component';
import { GoogleMapsModule } from '@angular/google-maps';
import { GroupByComponent } from './group-by/group-by.component';
import { GroupByCategoryComponent } from 'src/app/categories/group-by-category/group-by-category.component';
import { ConfirmationDialogComponent } from './confirmation-dialog/confirmation-dialog.component';



@NgModule({
  declarations: [
    GroupByCategoryComponent,
    LocationsListComponent,
    LocationComponent,
    ToolbarComponent,
    FilterComponent,
    SortComponent,
    GroupByComponent,
    MapComponent,
    ConfirmationDialogComponent
  ],
  entryComponents: [
    GroupByCategoryComponent,
    LocationsListComponent,
    LocationComponent,
    ToolbarComponent,
    FilterComponent,
    SortComponent,
    GroupByComponent,
    MapComponent,
    ConfirmationDialogComponent
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
    GoogleMapsModule,
    CommonModule
  ],
  exports: [
    ConfirmationDialogComponent,
    GroupByCategoryComponent,
    LocationsListComponent,
    ToolbarComponent,
    FilterComponent,
    SortComponent,
    GroupByComponent,
    MapComponent,
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
    CommonModule
  ]
})
export class SharedModule { }
