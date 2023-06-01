import { Action } from "@ngrx/store";
import { Food } from "src/app/shop/shop.component";

export const ADD_FOOD = 'ADD_FOOD';

export class AddFood implements Action {
    readonly type = ADD_FOOD;
    constructor(public newFood: Food) {}
}

