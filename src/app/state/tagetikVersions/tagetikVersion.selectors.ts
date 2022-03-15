import { TagetikVersionsState } from './tagetikVersion.reducer';
import { createSelector } from '@ngrx/store';
import { AppState } from './../app.state';
export const selectTagetikVersions = (state: AppState) =>
  state.tagetikVersionsState;
export const selectAllTagetikVersions = createSelector(
  selectTagetikVersions,
  (state: TagetikVersionsState) => state.tagetikVersions
);
