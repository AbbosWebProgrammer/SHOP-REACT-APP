
import {SET_BURGER} from "../types/menusTypes";

const initialState = {
    menus:[],
}

export const burgerReduser = (state = initialState,action) => {
    if(action.type === SET_BURGER) {
        return{
            ...state,
            ...action.payload
        }
    }
    return state;
}