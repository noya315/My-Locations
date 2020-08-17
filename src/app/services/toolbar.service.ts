import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Portal } from '@angular/cdk/portal';

@Injectable({
  providedIn: 'root'
})
export class ToolbarService {

  private actionPortal$ = new Subject<Portal<any>>();

  constructor() { }

  get actionPortal(): Observable<Portal<any>> {
    return this.actionPortal$.asObservable();
  }

  setPortal(portal: Portal<any>) {
    this.actionPortal$.next(portal);
  }
}
