import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';

import { MapsService } from './maps.service';
import { Location } from '../locations/location';
import { Category } from '../categories/category';
import { LocationViewState } from '../locations/location-view-state.enum';
import { LocalStorageBehaviorSubject } from '../local-storage-behavior-subject';
import { ViewLocationDetailsDialogComponent } from '../locations/view-location-details-dialog/view-location-details-dialog.component';

export const LOCATIONS_KEY = 'Locations';

@Injectable({
  providedIn: 'root'
})
export class LocationsService {

  private locations$: LocalStorageBehaviorSubject<Location[]>;
  private selectedLocation$: BehaviorSubject<Location>;
  private viewMode$: BehaviorSubject<LocationViewState>;

  constructor(public dialog: MatDialog, private mapsService: MapsService) {
    this.locations$ = new LocalStorageBehaviorSubject<Location[]>(LOCATIONS_KEY, []);
    this.selectedLocation$ = new BehaviorSubject<Location>(new Location());
    this.viewMode$ = new BehaviorSubject<LocationViewState>(LocationViewState.DefaultView);
  }

  get locations(): Observable<Location[]> {
    return this.locations$.asObservable();
  }

  get selectedLocation(): Observable<Location> {
    return this.selectedLocation$.asObservable();
  }

  get viewMode(): Observable<LocationViewState> {
    return this.viewMode$.asObservable();
  }

  getLocations(): Location[] {
    return this.locations$.value;
  }

  getSelectedLocation(): Location {
    return this.selectedLocation$.value;
  }

  saveLocations(locations: Location[]) {
    this.locations$.next(locations);
  }


  addLocation = (location: Location) => {
    const locations = this.getLocations();
    locations.push(location);
    this.saveLocations(locations);
  }

  removeLocation = () => {
    let locations = this.getLocations();
    const selectedLocation = this.selectedLocation$.value;
    locations = locations.filter((loc) => loc !== selectedLocation);
    this.saveLocations(locations);
    this.resetLocation();
  }

  editLocation = (location: Location) => {
    const locations = this.getLocations();
    const selectedLocation = this.selectedLocation$.value;
    const locationIndex = locations.findIndex((loc) => loc === selectedLocation);
    if (locationIndex !== -1) {
      locations[locationIndex] = location;
      this.saveLocations(locations);
      this.selectedLocation$.next(location);
    }
  }

  selectLocation = (location: Location) => {
    const selctedLocation = this.selectedLocation$.value;
    if (location.name !== selctedLocation.name || (!selctedLocation)) {
      this.selectedLocation$.next(location);
      this.mapsService.setCenter(location.position);
      this.mapsService.selClickable(false);

    } else {
      const defualtLocation = new Location();
      this.selectedLocation$.next(defualtLocation);
      this.mapsService.setDefaultCenter();
      this.mapsService.selClickable(true);
    }
  }

  resetLocation = () => {
    this.selectedLocation$.next(new Location());
    this.mapsService.setDefaultCenter();
    this.mapsService.selClickable(true);
  }

  viewDetails = () => {
    const categoryName = this.selectedLocation$.value.name;
    this.dialog.open(ViewLocationDetailsDialogComponent, {
      minWidth: '250px',
      panelClass: 'no-padding-dialog',
      data: { location: this.selectedLocation$.value }
    });
  }

  removeAllLocationsFromCategory(category: Category) {
    let locations = this.getLocations();
    locations = locations.filter((location) => location.category !== category.name);
    this.saveLocations(locations);
    this.resetLocation();
  }

  updateAllLocationToCategory(selectedCategory: Category, newCategory: Category) {
    const locations = this.getLocations();
    locations.forEach((location) => {
      if (location.category === selectedCategory.name) {
        location.category = newCategory.name;
      }
    });
    this.saveLocations(locations);
  }

  changeViewMode(mode: number) {
    this.viewMode$.next(mode as LocationViewState);
  }
}
