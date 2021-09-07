import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SmartpickComponent } from './smartpick.component';

describe('SmartpickComponent', () => {
  let component: SmartpickComponent;
  let fixture: ComponentFixture<SmartpickComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SmartpickComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SmartpickComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
