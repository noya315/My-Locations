import { Component, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import { Location } from '../location';
import { ViewLocationDetailsDialogComponent } 
from '../view-location-details-dialog/view-location-details-dialog.component';
import { SubmitLocationDialogComponent } 
from '../submit-location-dialog/submit-location-dialog.component'
import { LocationsStorageService } from '../locations-storage.service';

const LOCATION_NAME = "Locations";

@Component({
  selector: 'app-locations-manager',
  templateUrl: './locations-manager.component.html',
  styleUrls: ['./locations-manager.component.scss']
})
export class LocationsManagerComponent {
  @Input() title:string;
  locations$ : Observable<Location[]>;
  currentLocation: Location;

  constructor(public dialog: MatDialog,
    private locationStorageService: LocationsStorageService) {
    this.title = LOCATION_NAME; 
    this.currentLocation = new Location();
    this.locations$ = this.locationStorageService.getLocations();
  }

  addLocationProcess = () => this.openDialog('Add Location', this.addLocation);

  editLocationProcess = () => this.openDialog('Edit Location', this.editLocation);

  openDialog = (submitTask: string, callback: Function) => {
    const dialogRef = this.dialog.open(SubmitLocationDialogComponent, {
      width:'250px',
      panelClass: 'no-padding-dialog',
      data: {location: this.currentLocation, submitTask: submitTask}
    });

    dialogRef.afterClosed().subscribe((locationData) => {
      if(locationData){
        const location = new Location(locationData.name, locationData.address,
          locationData.coordinates, locationData.category);
        callback(location);
      }
    });
  }

  addLocation = (location: Location) => {
    this.locationStorageService.addLocation(location);
  }

  removeLocation = () => {
    this.locationStorageService.removeLocation(this.currentLocation);
    this.resetLocation();
  }

  editLocation = (location: Location) => {
    this.locationStorageService.editLocation(this.currentLocation, location);
    this.currentLocation = location;
    this.title = this.currentLocation.name;
  }

  viewDetails = () => {
    this.dialog.open(ViewLocationDetailsDialogComponent, {
      minWidth:'300px',
      panelClass: 'no-padding-dialog',
      data: {location: this.currentLocation}
    });
  }
  
  chooseLocation = (location: Location) => {
    if(location.name !== this.currentLocation.name || (!this.currentLocation)){
      this.currentLocation = location;
      this.title = location.name;
    } else {
      this.resetLocation();
    }
  }

  resetLocation = () => {
    this.currentLocation = new Location();
    this.title = LOCATION_NAME;
  }
}