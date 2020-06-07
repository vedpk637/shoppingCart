import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SeasoningComponent } from './seasoning.component';

describe('SeasoningComponent', () => {
  let component: SeasoningComponent;
  let fixture: ComponentFixture<SeasoningComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SeasoningComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SeasoningComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
