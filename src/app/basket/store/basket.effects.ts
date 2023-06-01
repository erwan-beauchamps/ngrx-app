import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Actions, ofType, createEffect } from '@ngrx/effects';
import { catchError, map, of, switchMap } from 'rxjs';

import * as BasketActions from './basket.actions';

@Injectable()
export class BasketEffects {

    basketAdd = createEffect(() =>
        this.actions.pipe(
            ofType(BasketActions.ADD_FOOD),
            switchMap((basketData: BasketActions.AddFood) => {
                return this.http.post(
                    'https://ngrx-app-4fa48-default-rtdb.europe-west1.firebasedatabase.app/backlog.json',
                    basketData.newFood
                    ).pipe(
                        catchError(error => { 
                            console.log(error); 
                            return of();
                        }),
                        map(resData => {
                            return new BasketActions.BacklogSucceed();
                        })
                    )
            })
        )
    );

    constructor(private actions: Actions, private http: HttpClient) {}
}