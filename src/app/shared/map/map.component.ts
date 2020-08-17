import { Observable } from 'rxjs';
import { Component } from '@angular/core';

import { Location } from 'src/app/locations/location';
import { MapsService } from 'src/app/services/maps.service';
import { LocationsService } from 'src/app/services/locations.service';

const LOCATION_ICON_URL = 'http://maps.google.com/mapfiles/ms/icons/';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent {

  center$: Observable<google.maps.LatLngLiteral>;
  locations$: Observable<Location[]>;
  selectedLocation$: Observable<Location>;

  defaultOptions = {
    icon: {
      url: LOCATION_ICON_URL + 'blue-dot.png'
    }
  };

  options = {
    icon: {
      url: LOCATION_ICON_URL + 'red-dot.png'
    }
  };

  constructor(private mapsService: MapsService,
              private locationsService: LocationsService) {
    this.center$ = this.mapsService.center;
    this.selectedLocation$ = this.locationsService.selectedLocation;
    this.locations$ = this.locationsService.locations;
    this.mapsService.setDefaultCenter();
  }
}
