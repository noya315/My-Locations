import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs';
import { Location } from '../location';
import { LocationsService } from '../locations.service';

@Component({
  selector: 'app-locations-list',
  templateUrl: './locations-list.component.html',
  styleUrls: ['./locations-list.component.scss']
})
export class LocationsListComponent {
  @Input() locations: Location[];

  @Output() locationSelected: EventEmitter<any>;

  selectedLocation$: Observable<Location>;

  constructor(private locationService: LocationsService) {
    this.selectedLocation$ = this.locationService.selectedLocation;
    this.locationSelected = new EventEmitter<any>();
  }

  selectLocation(location: Location){
    this.locationSelected.emit({location});
  }
}
