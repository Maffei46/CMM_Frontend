import { createAction, props } from '@ngrx/store';
import { TagetikVersion } from '@app/_models/tagetik_version';

export const addTagetikVersion = createAction(
  '[TagetikVersions] Add TagetikVersion',
  props<{ content: TagetikVersion }>()
);

export const loadTagetikVersions = createAction(
  '[TagetikVersions] Load TagetikVersions'
);

export const loadTagetikVersionsSuccess = createAction(
  '[TagetikVersions] Load TagetikVersions Success',
  props<{ tagetikVersions: TagetikVersion[] }>()
);

export const loadTagetikVersionsFailure = createAction(
  '[TagetikVersions] Load TagetikVersions Failure',
  props<{ error: string }>()
);
