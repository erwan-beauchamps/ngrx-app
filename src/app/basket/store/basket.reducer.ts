import { Action } from '@ngrx/store';
import { Food } from './../../shop/shop.component';
import * as BasketActions from './basket.actions';

const initialState = {
    basketList: [] as Food[],
    total: 0
};

export function basketReducer(state = initialState, action: Action) {
    switch(action.type) {
        case BasketActions.ADD_FOOD:
            return {
                ...state,
                basketList: [...state.basketList, (action as BasketActions.AddFood).newFood]
            };
        default: {
            return {
                ...state
            }
        }
    }
}

