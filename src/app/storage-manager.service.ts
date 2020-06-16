import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageManagerService {
  constructor() { }

  getEntity<T>(key: string): T{
    return JSON.parse(localStorage.getItem(key));
  }

  setEntity<T>(key:string, entity: Array<T>){
    localStorage.setItem(key, JSON.stringify(entity));
  }
}