import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth-user",
  initialState: [],
  reducers: {
    addUser: () => {},
    removeUser: () => {},
  },
});

export default authSlice;
