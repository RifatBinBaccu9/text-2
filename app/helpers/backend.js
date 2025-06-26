
import { del, get, patch, post, postForm, put } from "./api";

//auth
export const sendOtp = (data) => post("/get-otp", data);
export const postRegister = (data) => post("/register", data);
export const fetchUser = (data) => get("/user", data);
export const postSignin = (data) => post("/login", data);
export const postVerifyOtp = (data) => post("/verify-otp", data);
export const postResetPassword = (data) => post("/reset-password", data);
export const postProfileUpdate = (data) => put("/user", data);
export const postChangePassword = (data) => put("/update-password", data);
