import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MapsService {
  private center$: Subject<google.maps.LatLngLiteral>;
  constructor() {
    this.center$ = new Subject<google.maps.LatLngLiteral>();
  }

  get center(): Observable<google.maps.LatLngLiteral>{
    return this.center$.asObservable();
  }

  setCenter(center: google.maps.LatLngLiteral){
    this.center$.next(center);
  }

  setDefaultCenter(){
    navigator.geolocation.getCurrentPosition((positin) => {
      const latitude = positin.coords.latitude;
      const longitude = positin.coords.longitude;
      this.setCenter({lat: latitude, lng: longitude});
    });
  }
}
