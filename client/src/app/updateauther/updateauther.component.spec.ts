import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateautherComponent } from './updateauther.component';

describe('UpdateautherComponent', () => {
  let component: UpdateautherComponent;
  let fixture: ComponentFixture<UpdateautherComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateautherComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateautherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
