import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../environments/environment';
import * as fromComdata from '../comdata.reducer';


export interface State {

  [fromComdata.comdataFeatureKey]: fromComdata.State;
}

export const reducers: ActionReducerMap<State> = {

  [fromComdata.comdataFeatureKey]: fromComdata.reducer,
};


export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];
