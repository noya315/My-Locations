import { Component } from '@angular/core';
import { State } from '../state.enum';

@Component({
  selector: 'app-manager',
  templateUrl: './manager.component.html',
  styleUrls: ['./manager.component.scss']
})
export class ManagerComponent {
  state : State;

  constructor() {
    this.state = State.Categories;
  }

  setCategories = () => this.state = State.Categories;
  
  setLocations = () => this.state = State.Locations;
}