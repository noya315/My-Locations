import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Location } from './location';
import { StorageManagerService } from '../storage-manager.service';
import { throwMatDialogContentAlreadyAttachedError } from '@angular/material/dialog';

const LOCATIONS_KEY = 'Location';

@Injectable({
  providedIn: 'root'
})
export class LocationsStorageService {
  locations$: BehaviorSubject<Location[]>;
  constructor(private storageManagerService: StorageManagerService) { 
    this.locations$ = new BehaviorSubject(this.getLocationsFromStorage());
  }

  getLocations(): Observable<Location[]>{
    return this.locations$;
  }

  addLocation(location: Location){
    const locations = this.locations$.value;
    locations.push(location);
    this.setLocationToStorage(locations);
    this.locations$.next(locations);
  }

  removeLocation(location: Location){
    const newLocations = this.locations$.value.filter((loc) => loc !== location);
    this.setLocationToStorage(newLocations);
    this.locations$.next(newLocations);
  }

  editLocation(currentLocation: Location, location: Location){
    const locations = this.locations$.value;
    const locationIndex = locations.findIndex((loc) => loc === currentLocation);
    if(locationIndex !== -1){
      locations[locationIndex] = location;
      this.setLocationToStorage(locations);
      this.locations$.next(locations);
    }
  }

  private getLocationsFromStorage(): Location[]{
    return this.storageManagerService.getEntity(LOCATIONS_KEY) || [];
  }

  private setLocationToStorage(locations: Location[]){
    this.storageManagerService.setEntity(LOCATIONS_KEY, locations);
  }
}
