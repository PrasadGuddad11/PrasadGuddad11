import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComposedviewComponent } from './composedview.component';

describe('ComposedviewComponent', () => {
  let component: ComposedviewComponent;
  let fixture: ComponentFixture<ComposedviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComposedviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ComposedviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
