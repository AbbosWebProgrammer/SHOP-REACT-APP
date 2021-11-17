
import {SET_BRAND} from "../types/menusTypes";

const initialState = {
    images:[],
};


export const brendsReduser = (state = initialState, action) => {
    if (action.type === SET_BRAND) {
        return{
            ...state,
            ...action.payload
        }
    }
    return state;
}

