import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        itemsInCart:[]
    },
    reducers: {
        setItemToCart: (state, action) => {
            state.itemsInCart.push(action.payload)
        },
        deleteItemFromCart: (state, action) => {
            state.itemsInCart = state.itemsInCart.filter(game => game.id !== action.payload)
        } 
    }
});

export const {setItemToCart, deleteItemFromCart} = cartSlice.actions;
export default cartSlice.reducer;