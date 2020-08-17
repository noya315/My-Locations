import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Portal } from '@angular/cdk/portal';
import { ToolbarService } from '../toolbar.service';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent {
  title$: Observable<string>;
  actionPortal$: Observable<Portal<any>>;

  constructor(private toolbarService: ToolbarService) {
    this.title$ = this.toolbarService.title;
    this.actionPortal$ = this.toolbarService.actionPortal;
   }
}
