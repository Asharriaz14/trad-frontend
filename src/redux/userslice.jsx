// import { createSlice } from "@reduxjs/toolkit";
// import { useSelector } from "react-redux";

// const initialState = {
//     user: null,
//     session: null,
// };

// export const userSlice = createSlice({
//     name: "user",
//     initialState,
//     reducers: {
//         SET_USER_INFO: (state, action) => {
//             const { user, session } = action.payload;
//             state.user = user;
//             state.session = session;
//         },
//         RESTORE_ACCESS_TOKEN: (state, action) => {
//             if (state.session) {
//                 state.session.accessToken = action.payload;
//             }
//         },
//         LOGOUT: (state) => {
//             state.user = null;
//             state.session = null;
//         },
//     },
// });

// export const { SET_USER_INFO, LOGOUT, RESTORE_ACCESS_TOKEN } = userSlice.actions;

// export const selectUser = (state) => state.user;
// export const useUserSelector = () => useSelector((state) => state.user.user);

// export default userSlice.reducer;
