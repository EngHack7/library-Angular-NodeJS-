import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteautherComponent } from './deleteauther.component';

describe('DeleteautherComponent', () => {
  let component: DeleteautherComponent;
  let fixture: ComponentFixture<DeleteautherComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeleteautherComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteautherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
