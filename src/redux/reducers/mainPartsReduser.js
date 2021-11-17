
import {SET_PARTS} from "../types/menusTypes";

const initialState = {
    slide:[],
    slideId:[],
    parts:[],
    partscard:[],
    partsB:[],
    partscardB:[],
    partsId:"",
}

export const mainPartsReduser = (state = initialState, action) => {
    if (action.type === SET_PARTS){
        return{
            ...state,
            ...action.payload
        }
    }
    return state;
};