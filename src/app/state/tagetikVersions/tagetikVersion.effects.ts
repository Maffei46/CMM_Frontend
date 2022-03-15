import {
  loadTagetikVersionsSuccess,
  loadTagetikVersionsFailure,
  loadTagetikVersions,
} from './tagetikVersion.action';
import { Injectable } from '@angular/core';
import { TagetikVersionService } from '@app/_services/tagetik-version.service';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { catchError, from, map, mergeMap, of, switchMap } from 'rxjs';
import { AppState } from '../app.state';
@Injectable()
export class TagetikVersionsEffects {
  constructor(
    private actions$: Actions,
    private store: Store<AppState>,
    private tagetikVersionService: TagetikVersionService
  ) {}

  loadTagetikVersions$ = createEffect(
    () => {
      return this.actions$.pipe(
        ofType(loadTagetikVersions),
        mergeMap((action) => {
          return this.tagetikVersionService.load().pipe(
            map((data) => {
              console.log(data);
            })
          );
        })
      );
    },
    { dispatch: false }
  );
}
