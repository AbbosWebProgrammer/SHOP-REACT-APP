import {CARDS_INFO, SET_STATE} from "../types/menusTypes";
import axios from "axios";
import {API_PATH} from "../../tools/constans";

export function setState (data) {
    return {
        type: SET_STATE,
        payload: data
    }
}



export  const getCard = () => (dispatch,getState) => {


    axios.get(API_PATH + "api/XitProducts/")
        .then((res) => {


            // dispatch(setState({getCardsId: res.cards}))
            dispatch(setState({cards:res.data.data}))
        })

}


export  const getCardIn = () => (dispatch,getState) => {

    // + getCard().cardsR.getCardsId

    axios.get(API_PATH + "api/ProductInfo/" + getState().cardsR.getCardsId)
        .then((res) => {

            dispatch(setState({cardsIn:res.data.data}))
        })

}



export  const getCardColor = () => (dispatch) => {


    axios.get(API_PATH + "api/ProductsColorByProductId/")
        .then((res) => {
            dispatch(setState({colors:res.data}))
        })

}

export const getCardBack = (id ,history) => {
   return function (dispatch,getState) {
       axios.get(API_PATH + "/api/ProductInfo/" +id)
           .then((res) => {
               dispatch(setState({back:res.data.data}))
               // history.push("/three")
           })
   }
}