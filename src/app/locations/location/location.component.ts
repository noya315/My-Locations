import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.scss']
})
export class LocationComponent {
  @Input() name: string;
  @Input() isSelected: boolean;

  @Output() locationSelected: EventEmitter<any>;

  constructor() {
    this.isSelected = false;
    this.locationSelected = new EventEmitter<any>();
  }

  selectLocation(){
    this.locationSelected.emit();
  }
}
