import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs';
import { Category } from '../categories/category';
import { FormControl, AbstractControl, ValidatorFn } from '@angular/forms';
import { startWith, map } from 'rxjs/operators';
import { CategoriesService } from '../categories/categories.service';

function autocompleteObjectValidator(): ValidatorFn {
  return (control: AbstractControl): { [key: string]: any } | null => {
    if (typeof control.value === 'string' && control.value !== '') {
      return { invalidAutocompleteObject: { value: control.value } };
    }
    return null;
  };
}
@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent implements OnInit {

  @Output() changeFilter: EventEmitter<any>;

  private categories: Category[];

  filteredCategoriesOptions: Observable<Category[]>;

  categoriesAutocompleteControl = new FormControl('',
    { validators: [autocompleteObjectValidator()] });

  error = {
    type: 'invalidAutocompleteObject',
    message: 'Category not recognized. Click one of the autocomplete options.'
  };

  constructor(private categoriesService: CategoriesService) {
    this.categories = this.categoriesService.getCategories();
    this.changeFilter = new EventEmitter<any>();
  }

  ngOnInit(): void {
    this.filteredCategoriesOptions = this.categoriesAutocompleteControl.valueChanges.pipe(
      startWith(''),
      map(value => value ? value.name : ''),
      map(name => name ? this._filterCategories(name) : this.categories.slice())
    );
  }

  private _filterCategories(name: string): Category[] {
    if (name === '') {
      return this.categories.slice();
    }
    const filterValue = name.toLowerCase();
    return this.categories.filter(option => option.name.toLowerCase().includes(filterValue));
  }

  displayCategoryFn(category?: Category): string | undefined {
    return category ? category.name : undefined;
  }

  checkIfOptionNotSelected() {
    const value = this.categoriesAutocompleteControl.value;
    if (!value) {
      this.changeFilter.emit({ value });
    }
  }

  changeInput(value: string) {
    this.changeFilter.emit({ value });
  }
}
