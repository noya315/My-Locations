import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubmitCategoryDialogComponent } from './submit-category-dialog.component';

describe('SubmitCategoryDialogComponent', () => {
  let component: SubmitCategoryDialogComponent;
  let fixture: ComponentFixture<SubmitCategoryDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubmitCategoryDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubmitCategoryDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
