import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from 'src/app/shared/shared.module';
import { LocationsPageComponent } from './locations-page/locations-page.component';
import { SubmitLocationDialogComponent } from './submit-location-dialog/submit-location-dialog.component';
import { ViewLocationDetailsDialogComponent } from './view-location-details-dialog/view-location-details-dialog.component';



@NgModule({
  declarations: [
    LocationsPageComponent,
    SubmitLocationDialogComponent,
    ViewLocationDetailsDialogComponent
  ],
  entryComponents: [
    LocationsPageComponent,
    SubmitLocationDialogComponent,
    ViewLocationDetailsDialogComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    LocationsPageComponent,
    SubmitLocationDialogComponent,
    ViewLocationDetailsDialogComponent
  ]
})
export class LocationsModule { }
