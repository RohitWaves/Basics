import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    email: "",
    password: "",
};

const loginSlice = createSlice({
    name: "login",
    initialState,

    reducers: {
        setEmail: (state, action) => {
            state.email = action.payload
        },

        setPassword: (state, action) => {
            state.password = action.payload
        },
        resetCredentials: (state) => {
            state.email = '';
            state.password = '';
        },
    },

});

export const { setEmail, setPassword, resetCredentials } = loginSlice.actions;

export default loginSlice.reducer;
