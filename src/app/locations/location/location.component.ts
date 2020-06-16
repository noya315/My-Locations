import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.scss']
})
export class LocationComponent {
  @Input() name: string;
  @Input() isChoosed: boolean;
  
  constructor() { 
    this.isChoosed = false;
  }
}