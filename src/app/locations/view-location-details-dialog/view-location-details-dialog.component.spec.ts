import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewLocationDetailsDialogComponent } from './view-location-details-dialog.component';

describe('ViewLocationDetailsDialogComponent', () => {
  let component: ViewLocationDetailsDialogComponent;
  let fixture: ComponentFixture<ViewLocationDetailsDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewLocationDetailsDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewLocationDetailsDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
