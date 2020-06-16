import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewCategoryDetailsDialogComponent } from './view-category-details-dialog.component';

describe('ViewCategoryDetailsDialogComponent', () => {
  let component: ViewCategoryDetailsDialogComponent;
  let fixture: ComponentFixture<ViewCategoryDetailsDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewCategoryDetailsDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewCategoryDetailsDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
