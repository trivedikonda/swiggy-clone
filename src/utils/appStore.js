import  cartReducer  from "./cartSlice";

import {configureStore } from "@reduxjs/toolkit";

const appStore = configureStore({
    reducer: {          // reducer is a combination of multiple small reducers.
        cart: cartReducer
    }
})

export default appStore