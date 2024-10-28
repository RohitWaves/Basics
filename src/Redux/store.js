import { configureStore } from "@reduxjs/toolkit";
import loginReducer from "../Redux/loginSlice";
import otpReducer from "../Redux/otpSlice";

const store = configureStore({
    reducer: {
        login: loginReducer,
        otp: otpReducer
    },
});

export default store;