import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent {
  @Input() name:string;
  @Input() isChoosed:boolean;
  
  constructor() { 
    this.isChoosed = false;
  }
}
