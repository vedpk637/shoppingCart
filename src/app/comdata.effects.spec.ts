import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';

import { ComdataEffects } from './comdata.effects';

describe('ComdataEffects', () => {
  let actions$: Observable<any>;
  let effects: ComdataEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        ComdataEffects,
        provideMockActions(() => actions$)
      ]
    });

    effects = TestBed.inject(ComdataEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
