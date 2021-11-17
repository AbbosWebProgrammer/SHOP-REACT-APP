import {SET_PARTS} from "../types/menusTypes";
import axios from "axios";
import {API_PATH} from "../../tools/constans";



export function inform (data) {
    return{
        type:SET_PARTS,
        payload:data
    }
}


export const getCarousel = () => (dispatch,getState) => {
    axios.get(API_PATH + "api/ShoppingDayForHomePageCarousel/")
        .then((res) => {
            dispatch(inform({slide:res.data}))
        })
}


export const getCarouselId = (id, history) => {
    // console.log(id)
    // console.log("id,history")
    return function (dispatch,getState) {
        axios.get(API_PATH + "api/ShoppingDayProducts/ " + id)
            .then((res) => {
                dispatch(inform({slideId:res.data}))
                // history.push("/twooo")
            })
    }
}





export const getParts = () =>  (dispatch,getState) => {
     axios.get(API_PATH +"api/MainPagePromoForHomePage/" )
        .then((res) => {
            dispatch(inform({parts:res.data}))
        })
}


export const getPartsId = (brand, history) => {
    console.log('brand', brand)
   return function(dispatch, getState) {
       axios.get(API_PATH +"api/ProductsByBrandId/" + brand )

           .then((res) => {
               dispatch(inform({partscard:res.data}))
               history.push("/two")
           })
   }
}


export const getPartsB = () =>  (dispatch,getState) => {
    axios.get(API_PATH +"api/MainPagePromoForHomePageSlider/" )
        .then((res) => {
            dispatch(inform({partsB:res.data}))
        })
}
