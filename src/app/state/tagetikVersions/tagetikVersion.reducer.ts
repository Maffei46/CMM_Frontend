import {
  addTagetikVersion,
  loadTagetikVersions,
  loadTagetikVersionsFailure,
  loadTagetikVersionsSuccess,
} from './tagetikVersion.action';
import { TagetikVersion } from '@app/_models/tagetik_version';
import { createReducer, on } from '@ngrx/store';

export interface TagetikVersionsState {
  tagetikVersions: TagetikVersion[];
  error: string;
  status: 'pending' | 'loading' | 'error' | 'success';
}

export const initialState: TagetikVersionsState = {
  tagetikVersions: [],
  error: null,
  status: 'pending',
};

export const TagetikVersionsReducer = createReducer(
  //Supply the initial state
  initialState,
  on(loadTagetikVersions, (state) => ({ ...state, status: 'loading' })),
  on(loadTagetikVersionsSuccess, (state, { tagetikVersions }) => ({
    ...state,
    tagetikVersions: tagetikVersions,
    error: null,
    status: 'success',
  })),
  on(loadTagetikVersionsFailure, (state, { error }) => ({
    ...state,
    error: error,
    status: 'error',
  }))
);
