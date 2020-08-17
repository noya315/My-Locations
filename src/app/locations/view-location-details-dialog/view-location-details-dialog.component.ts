import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

import { LocationData } from 'src/app/models';

@Component({
  selector: 'app-view-location-details-dialog',
  templateUrl: './view-location-details-dialog.component.html',
  styleUrls: ['./view-location-details-dialog.component.scss']
})
export class ViewLocationDetailsDialogComponent {

  constructor(public dialogRef: MatDialogRef<ViewLocationDetailsDialogComponent>,
              @Inject(MAT_DIALOG_DATA) public locationData: LocationData) { }

  close = () => this.dialogRef.close();
}
