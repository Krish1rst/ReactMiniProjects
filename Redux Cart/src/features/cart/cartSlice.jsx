import { createSlice } from "@reduxjs/toolkit";
import cartItems from "../../cartItems";
const initialState={
    cartItem:cartItems,
    amount:3,
    total:0,
    isLoading:true
}
const cartSlice=createSlice({
    name:'cart',
    initialState,
// just pass the refrerence
})
// console.log(cartSlice)
export default cartSlice.reducer;