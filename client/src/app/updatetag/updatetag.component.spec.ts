import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatetagComponent } from './updatetag.component';

describe('UpdatetagComponent', () => {
  let component: UpdatetagComponent;
  let fixture: ComponentFixture<UpdatetagComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdatetagComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdatetagComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
