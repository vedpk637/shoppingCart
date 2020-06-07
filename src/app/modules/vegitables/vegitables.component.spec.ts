import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VegitablesComponent } from './vegitables.component';

describe('VegitablesComponent', () => {
  let component: VegitablesComponent;
  let fixture: ComponentFixture<VegitablesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VegitablesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VegitablesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
