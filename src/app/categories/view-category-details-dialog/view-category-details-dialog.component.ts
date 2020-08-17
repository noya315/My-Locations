import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

import { CategoryData } from 'src/app/models';

@Component({
  selector: 'app-view-category-details-dialog',
  templateUrl: './view-category-details-dialog.component.html',
  styleUrls: ['./view-category-details-dialog.component.scss']
})
export class ViewCategoryDetailsDialogComponent {

  constructor(public dialogRef: MatDialogRef<ViewCategoryDetailsDialogComponent>,
              @Inject(MAT_DIALOG_DATA) public categoryData: CategoryData) { }

  close = () => this.dialogRef.close();
}
