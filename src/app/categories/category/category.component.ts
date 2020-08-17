import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent {
  @Input() name: string;
  @Input() isSelected: boolean;
  @Output() categorySelected: EventEmitter<any>;

  constructor() {
    this.isSelected = false;
    this.categorySelected = new EventEmitter<any>();
  }

  selectCategory(){
    this.categorySelected.emit();
  }
}
