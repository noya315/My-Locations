import { Observable } from 'rxjs';
import { Component } from '@angular/core';

import { Location } from 'src/app/locations/location';
import { MapsService } from 'src/app/services/maps.service';
import { LocationsService } from 'src/app/services/locations.service';
import { MatDialog } from '@angular/material/dialog';
import { SubmitLocationDialogComponent } from 'src/app/locations/submit-location-dialog/submit-location-dialog.component';

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
  clickable$: Observable<boolean>;

  defaultMarkerOptions = {
    icon: {
      url: LOCATION_ICON_URL + 'blue-dot.png'
    }
  };

  selectedMarkerOptions = {
    icon: {
      url: LOCATION_ICON_URL + 'red-dot.png'
    }
  };

  constructor(private dialog: MatDialog,
              private mapsService: MapsService,
              private locationsService: LocationsService) {
    this.center$ = this.mapsService.center;
    this.selectedLocation$ = this.locationsService.selectedLocation;
    this.locations$ = this.locationsService.locations;
    this.clickable$ = this.mapsService.mapClickable;
    this.mapsService.setDefaultCenter();
  }

  addLocation(location: Location) {
    const dialogRef = this.dialog.open(SubmitLocationDialogComponent, {
      width: '250px',
      panelClass: 'no-padding-dialog',
      data: { location, submitTask: 'Add Location' }
    });

    dialogRef.afterClosed().subscribe((locationData) => {
      if (locationData) {
        const latitude = +locationData.latitude;
        const longitude = +locationData.longitude;
        const position = { lat: latitude, lng: longitude };
        const newLocation = new Location(locationData.name, locationData.address,
          locationData.category, position);
        this.locationsService.addLocation(newLocation);
      }
    });
  }

  addLocationProcess(event: any) {
    const subscription = this.clickable$.subscribe((isClickable) => {
      if (isClickable){
        const currentPosition = { lat: event.latLng.lat(), lng: event.latLng.lng() };
        const currentLocation = new Location(null, null, null, currentPosition);
        this.addLocation(currentLocation);
      }
    });
    subscription.unsubscribe();
  }
}
