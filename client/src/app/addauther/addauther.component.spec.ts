import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddautherComponent } from './addauther.component';

describe('AddautherComponent', () => {
  let component: AddautherComponent;
  let fixture: ComponentFixture<AddautherComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddautherComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddautherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
