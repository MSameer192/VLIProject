import { createReducer } from "@reduxjs/toolkit";


const InitialState = {
    Books: []
}
export const BookReducer = createReducer(InitialState, (builder) => {

    builder.addCase("AddBookRequest", (state, action) => {
        state.loading = true
    });

    builder.addCase("AddBookSuccess", (state, action) => {
        state.loading = false;
        state.BookInfo = action.payload;
    })

    builder.addCase('AddBookFailure', (state, action) => {
        state.loading = false;
        state.error = action.payload;
    })




    
    builder.addCase("GetAllBooksRequest", (state, action) => {
        state.loading = true
    });

    builder.addCase("GetAllBooksSuccess", (state, action) => {
        state.loading = false;
        state.Books = action.payload;
    })

    builder.addCase('GetAllBooksFailure', (state, action) => {
        state.loading = false;
        state.error = action.payload;
    })
})