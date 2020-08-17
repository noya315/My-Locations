import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

import { CategoryData } from 'src/app/models';

@Component({
  selector: 'app-submit-category-dialog',
  templateUrl: './submit-category-dialog.component.html',
  styleUrls: ['./submit-category-dialog.component.scss']
})
export class SubmitCategoryDialogComponent {
  name: string;

  constructor(public dialogRef: MatDialogRef<SubmitCategoryDialogComponent>,
              @Inject(MAT_DIALOG_DATA) public data: CategoryData) { }

  close = () => this.dialogRef.close();
}
