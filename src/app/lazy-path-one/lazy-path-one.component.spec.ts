import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LazyPathOneComponent } from './lazy-path-one.component';

describe('LazyPathOneComponent', () => {
  let component: LazyPathOneComponent;
  let fixture: ComponentFixture<LazyPathOneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LazyPathOneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LazyPathOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
