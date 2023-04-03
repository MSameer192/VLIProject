import { createReducer } from '@reduxjs/toolkit'

export const WishListReducer = createReducer({}, (builder) => {

    builder.addCase("GetWishListRequest", (state, action) => {
        state.loading = true;
    })

    builder.addCase("GetWishListSuccess", (state, action) => {
        state.loading = false;
        state.error = {};
        state.WishList = action.payload
    })
    builder.addCase("GetWishListError", (state, action) => {
        state.loading = false;
        state.error = action.payload
    })


    builder.addCase("RemoveWishRequest", (state, action) => {
        state.loading = true;
    })

    builder.addCase("RemoveWishSuccess", (state, action) => {
        state.loading = false;
        state.error = {};
        state.WishList = action.payload
    })
    builder.addCase("RemoveWishError", (state, action) => {
        state.loading = false;
        state.error = action.payload
    })



    builder.addCase("AddToWishListRequest", (state, action) => {
        state.loading = true;
    })

    builder.addCase("AddToWishListSuccess", (state, action) => {
        state.loading = false;
        state.error = {};
        state.WishList = action.payload
    })
    builder.addCase("AddToWishListError", (state, action) => {
        state.loading = false;
        state.error = action.payload
    })
})