import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-sort',
  templateUrl: './sort.component.html',
  styleUrls: ['./sort.component.scss']
})
export class SortComponent {
  @Output() sortingTypeChange: EventEmitter<any>;

  constructor() {
    this.sortingTypeChange = new EventEmitter<any>();
  }

  changeSorting(value: number){
    this.sortingTypeChange.emit({value});
  }
}
