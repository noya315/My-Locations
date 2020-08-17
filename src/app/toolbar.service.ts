import { Injectable } from '@angular/core';
import { Observable, Subject, BehaviorSubject } from 'rxjs';
import { Portal } from '@angular/cdk/portal';

@Injectable({
  providedIn: 'root'
})
export class ToolbarService {
  private title$: Subject<string> = new Subject<string>();
  private actionPortal$ = new Subject<Portal<any>>();

  constructor() { }

  get title(): Observable<string> {
    return this.title$;
  }

  get actionPortal(): Observable<Portal<any>> {
    return this.actionPortal$.asObservable();
  }

  setPortal(portal: Portal<any>) {
    this.actionPortal$.next(portal);
  }

  setTitle(title: string) {
    this.title$.next(title);
  }
}
