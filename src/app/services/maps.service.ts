import { Injectable } from '@angular/core';
import { Subject, Observable, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MapsService {

  private center$: Subject<google.maps.LatLngLiteral>;
  private mapClickable$: BehaviorSubject<boolean>;

  constructor() {
    this.center$ = new Subject<google.maps.LatLngLiteral>();
    this.mapClickable$ = new BehaviorSubject<boolean>(true);
  }

  get center(): Observable<google.maps.LatLngLiteral>{
    return this.center$.asObservable();
  }

  get mapClickable(): Observable<boolean>{
    return this.mapClickable$.asObservable();
  }

  setCenter(center: google.maps.LatLngLiteral){
    this.center$.next(center);
  }

  selClickable(isClickable: boolean){
    this.mapClickable$.next(isClickable);
  }

  setDefaultCenter(){
    navigator.geolocation.getCurrentPosition((positin) => {
      const latitude = positin.coords.latitude;
      const longitude = positin.coords.longitude;
      this.setCenter({lat: latitude, lng: longitude});
    });
  }
}
