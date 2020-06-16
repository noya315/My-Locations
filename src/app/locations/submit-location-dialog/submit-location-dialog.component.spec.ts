import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubmitLocationDialogComponent } from './submit-location-dialog.component';

describe('SubmitLocationDialogComponent', () => {
  let component: SubmitLocationDialogComponent;
  let fixture: ComponentFixture<SubmitLocationDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubmitLocationDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubmitLocationDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
