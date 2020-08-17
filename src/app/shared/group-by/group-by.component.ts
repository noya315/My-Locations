import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-group-by',
  templateUrl: './group-by.component.html',
  styleUrls: ['./group-by.component.scss']
})
export class GroupByComponent {
  @Input() checked = false;
  @Output() checkedChange: EventEmitter<any>;

  constructor() {
    this.checkedChange = new EventEmitter<any>();
  }

  changeChacked(isChecked: boolean) {
    const mode = isChecked ? 1 : 0;
    this.checkedChange.emit({ mode });
  }
}
