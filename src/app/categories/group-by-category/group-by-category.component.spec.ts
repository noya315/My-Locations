import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GroupByCategoryComponent } from './group-by-category.component';

describe('GroupByCategoryComponent', () => {
  let component: GroupByCategoryComponent;
  let fixture: ComponentFixture<GroupByCategoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GroupByCategoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GroupByCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
