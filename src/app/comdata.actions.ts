import { Action } from '@ngrx/store';

export enum ComdataActionTypes {
  LoadComdatas = '[Comdata] Load Comdatas',
  LoadComdatasSuccess = '[Comdata] Load Comdatas Success',
  LoadComdatasFailure = '[Comdata] Load Comdatas Failure',
}

export class LoadComdatas implements Action {
  readonly type = ComdataActionTypes.LoadComdatas;
}

export class LoadComdatasSuccess implements Action {
  readonly type = ComdataActionTypes.LoadComdatasSuccess;
  constructor(public payload: { data: any }) { }
}

export class LoadComdatasFailure implements Action {
  readonly type = ComdataActionTypes.LoadComdatasFailure;
  constructor(public payload: { error: any }) { }
}

export type ComdataActions = LoadComdatas | LoadComdatasSuccess | LoadComdatasFailure;

