import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { LocationData } from '../location-data';
import { Category } from '../../categories/category';
import { CategoriesService } from 'src/app/categories/categories.service';

export function ValidateLatitude(control: AbstractControl) {
  if (!(control.value >= -90 && control.value <= 90)) {
    return { error: false };
  }
  return null;
}

export function ValidateLongitude(control: AbstractControl) {
  if (!(control.value >= -180 && control.value <= 180)) {
    return { error: false };
  }
  return null;
}

@Component({
  selector: 'app-submit-location-dialog',
  templateUrl: './submit-location-dialog.component.html',
  styleUrls: ['./submit-location-dialog.component.scss']
})
export class SubmitLocationDialogComponent implements OnInit{
  locationForm: FormGroup;
  categories: Category[];
  valid = true;

  constructor(private formBuilder: FormBuilder,
              private categoriesService: CategoriesService,
              public dialog: MatDialogRef<SubmitLocationDialogComponent>,
              @Inject(MAT_DIALOG_DATA) public data: LocationData,
    ) {}

  ngOnInit(): void {
    this.categories = this.categoriesService.getCategories();
    this.locationForm = this.formBuilder.group({
      name: [this.data.location.name, Validators.required],
      address: [this.data.location.address, Validators.required],
      category: [this.data.location.category, Validators.required],
      latitude: [this.data.location.position.lat, [Validators.required, ValidateLatitude]],
      longitude: [this.data.location.position.lng, [Validators.required, ValidateLongitude]]
    });
  }

  submit(){
    this.valid = this.locationForm.valid;
    if (this.valid){
      this.dialog.close(this.locationForm.value);
    }
  }

  close = () => this.dialog.close();
}
