import { ADD_ITEM,DELETE_ITEM,increment,decrement } from "./ActionType"
export const addCart = (product) => {
    return {
        type : ADD_ITEM,
        payload : product
    }
}


export const deleteCart = () => {
    return {
        type : DELETE_ITEM,
        payload : product
    }
}

export const incrementItem = (Product) => {
    return {
        type:increment,
        payload:Product
    }
}

export const decrementItem = (Product) => {
    return {
        type:decrement,
        payload:Product
    }
}