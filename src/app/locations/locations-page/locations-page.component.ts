import { Component, TemplateRef, ViewChild, ViewContainerRef, AfterViewInit } from '@angular/core';
import { Observable, combineLatest, BehaviorSubject, of } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import { Location } from '../location';
import { LocationsService } from '../locations.service';
import { LocationViewState } from '../location-view-state.enum';
import { map } from 'rxjs/operators';
import { ToolbarService } from 'src/app/toolbar.service';
import { TemplatePortal } from '@angular/cdk/portal';
import { Output } from '../locations-output';
import { SubmitLocationDialogComponent } from '../submit-location-dialog/submit-location-dialog.component';

const LOCATION_NAME = 'Locations';

enum SortingType {
  CreationTime,
  Alphabetically
}

@Component({
  selector: 'app-locations-page',
  templateUrl: './locations-page.component.html',
  styleUrls: ['./locations-page.component.scss']
})
export class LocationsPageComponent implements AfterViewInit{
  @ViewChild('toolbarPortalContent') toolbarPortalContent: TemplateRef<any>;

  title$: Observable<string>;
  viewMode$ = this.locationsService.viewMode;
  locations$: Observable<Location[]>;
  filterByCategoryName: BehaviorSubject<string>;
  sortingType: BehaviorSubject<SortingType>;
  outputLocations$: Observable<Location[]>;
  selectedLocation$: Observable<Location>;
  isSelectLocation$: Observable<boolean>;
  output$: Observable<Output>;

  constructor(
    public dialog: MatDialog,
    private locationsService: LocationsService,
    private toolbarService: ToolbarService,
    private viewContainerRef: ViewContainerRef,
  ) {

    this.sortingType = new BehaviorSubject<SortingType>(SortingType.CreationTime);

    this.filterByCategoryName = new BehaviorSubject<string>('');

    this.selectedLocation$ = this.locationsService.selectedLocation;

    this.title$ = this.selectedLocation$.pipe(
      map(selectedLocation => this.updateTitle(selectedLocation))
    );

    this.isSelectLocation$ = this.selectedLocation$.pipe(
      map(selectedLocation => this.updateActionContext(selectedLocation))
    );

    this.locations$ = this.locationsService.locations;

    this.outputLocations$ = combineLatest([
      this.locations$,
      this.sortingType,
      this.filterByCategoryName
    ]).pipe(
      map(([locations, sortingType, filterByCategoryName]) =>
        this.updateOutputLocations(locations, sortingType, filterByCategoryName)
      )
    );

    this.output$ = combineLatest([this.outputLocations$, this.viewMode$]).pipe(
      map(([outputLocations, mode]) => this.updateOutputs(outputLocations, mode))
    );
  }

  updateTitle(selectedLocation: Location): string {
    return selectedLocation.name || LOCATION_NAME;
  }

  updateActionContext(selectedLocation: Location) {
    return selectedLocation.name !== '';
  }

  ngAfterViewInit(): void {
    const toolbarPortal = new TemplatePortal(this.toolbarPortalContent, this.viewContainerRef);
    this.toolbarService.setPortal(toolbarPortal);
  }

  addLocationProcess = () => this.openDialog('Add Location', this.addLocation);

  editLocationProcess = () => this.openDialog('Edit Location', this.editLocation);

  addLocation = (location: Location) => {
    this.locationsService.addLocation(location);
  }

  removeLocation = () => {
    this.locationsService.removeLocation();
  }

  editLocation = (location: Location) => {
    this.locationsService.editLocation(location);
  }

  viewDetails = () => {
    this.locationsService.viewDetails();
  }

  selectLocation = (location: Location) => {
    this.locationsService.selectLocation(location);
  }

  updateOutputLocations(locations: Location[], sortingType: SortingType, filterByCategoryName: string) {
    const locationsCopy = [...locations];
    if (filterByCategoryName !== '') {
      const filteredLocations = locationsCopy.filter((location) => location.category === filterByCategoryName);
      return this.sort(filteredLocations, sortingType);
    }
    return this.sort(locationsCopy, sortingType);
  }

  sort(locations: Location[], sortingType: SortingType) {
    if (sortingType === SortingType.CreationTime) {
      return locations;
    } else {
      return locations.sort((loc1, loc2) => loc1.name > loc2.name ? 1 : -1);
    }
  }

  groupByCategory(locations: Location[]): Record<string, Location[]> {
    return locations.reduce((acc, curr) => {
      const categoryName = curr.category;
      if (!acc[categoryName]) {
        acc[categoryName] = [curr];
      }
      else {
        acc[categoryName].push(curr);
      }
      return acc;
    }, {} as Record<string, Location[]>);
  }

  updateOutputs(locations: Location[], mode: LocationViewState): Output {
    if (mode === LocationViewState.DefaultView) {
      return { isGroupedBy: false, data: locations };
    }
    return { isGroupedBy: true, data: this.groupByCategory(locations) };
  }

  changeSorting(sortingType: number) {
    this.sortingType.next(sortingType as SortingType);
  }

  changeFilter(value: string) {
    this.filterByCategoryName.next(value);
  }

  changeViewMode(mode: number) {
    this.locationsService.changeViewMode(mode);
  }

  openDialog = (submitTask: string, callback: (location) => void) => {
    const selectedLocation = this.locationsService.getSelectedLocation();
    const dialogRef = this.dialog.open(SubmitLocationDialogComponent, {
      width: '250px',
      panelClass: 'no-padding-dialog',
      data: { location: selectedLocation, submitTask }
    });

    dialogRef.afterClosed().subscribe((locationData) => {
      if (locationData) {
        // this params should be as number
        const latitude = +locationData.latitude;
        const longitude = +locationData.longitude;
        const position = { lat: latitude, lng: longitude };
        const location = new Location(locationData.name, locationData.address,
          locationData.category, position);
        callback(location);
      }
    });
  }
}
