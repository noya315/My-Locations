import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs';
import { Location } from 'src/app/locations/location';
import { Category } from '../category';
import { LocationsService } from 'src/app/locations/locations.service';

@Component({
  selector: 'app-group-by-category',
  templateUrl: './group-by-category.component.html',
  styleUrls: ['./group-by-category.component.scss']
})
export class GroupByCategoryComponent {
  @Input() groupedByCategory: Record<string, Location[]>;
  @Output() locationSelected: EventEmitter<any>;
  selectedLocation$: Observable<Category>;

  constructor(private locationsService: LocationsService) {
    this.selectedLocation$ = this.locationsService.selectedLocation;
    this.locationSelected = new EventEmitter<any>();
  }

  selectLocation(location: Location){
    this.locationSelected.emit({location});
  }
}
