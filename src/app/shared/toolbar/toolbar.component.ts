import { Observable } from 'rxjs';
import { Component } from '@angular/core';
import { Portal } from '@angular/cdk/portal';

import { ToolbarService } from 'src/app/services/toolbar.service';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent {
  actionPortal$: Observable<Portal<any>>;

  constructor(private toolbarService: ToolbarService) {
    this.actionPortal$ = this.toolbarService.actionPortal;
   }
}
