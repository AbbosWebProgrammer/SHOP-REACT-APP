import {SET_BURGER} from "../types/menusTypes";
import axios from "axios";
import {API_PATH} from "../../tools/constans";


export function setBurger(data) {
    return{
        type:SET_BURGER,
        payload:data
    }
}

export const getBurger = () => (dispatch) => {
    axios.get(API_PATH + "api/Allcategory/")
        .then((res) => {
            dispatch(setBurger({menus:res.data.data}))
        })
}