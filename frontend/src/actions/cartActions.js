import axios from 'axios'

import { 
    CART_ADD_ITEM,
 } from '../constants/cartConstants'

 export const addToCart = (id, qty) => async(dispatch, getState) => {
    console.log("cart_action")
    const { data } = await axios.get(`/api/products/${id}`)

    dispatch({
        type: CART_ADD_ITEM,
        payload: {
            product: data._id,
            name: data.name,
            image: data.image,
            price: data.price,
            countInStock: data.countInStock,
            qty: qty
        }
    })
    // we use stringify bec we can only use json string to localstorage
    localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems))
 }
