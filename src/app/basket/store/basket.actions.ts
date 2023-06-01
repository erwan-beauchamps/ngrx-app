import { Action } from "@ngrx/store";
import { Food } from "src/app/shop/shop.component";

export const ADD_FOOD = 'ADD_FOOD';
export const BACKLOG_SUCCEED = 'BACKLOG_SUCCEED';

export class AddFood implements Action {
    readonly type = ADD_FOOD;
    constructor(public newFood: Food) {}
}

export class BacklogSucceed implements Action {
    readonly type = BACKLOG_SUCCEED;
    constructor() {}
}

