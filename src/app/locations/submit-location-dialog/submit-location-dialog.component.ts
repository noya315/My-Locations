import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { startWith, map } from 'rxjs/operators'
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { LocationsStorageService } from '../locations-storage.service';
import { CategoriesStorageService } from '../../categories/categories-storage.service';
import { LocationData } from '../location-data';
import { Category } from '../../categories/category';


@Component({
  selector: 'app-submit-location-dialog',
  templateUrl: './submit-location-dialog.component.html',
  styleUrls: ['./submit-location-dialog.component.scss']
})
export class SubmitLocationDialogComponent implements OnInit{
  locationForm: FormGroup;
  categories$: Observable<Category[]>;

  constructor(private formBuilder: FormBuilder,
    private categoriesStorageService: CategoriesStorageService,
    public dialog: MatDialogRef<SubmitLocationDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: LocationData,
    ) {}

  ngOnInit(): void {
    this.categories$ = this.categoriesStorageService.getCategories();
    this.locationForm = this.formBuilder.group({
      name: [this.data.location.name, Validators.required],
      address: [this.data.location.address, Validators.required],
      category: [this.data.location.category, Validators.required],
      coordinates:[this.data.location.coordinates, Validators.pattern('[0-9.]+(,[0-9]+){0,1}')]
    });
  }

  close = () => this.dialog.close();
}