import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
  name: "app",
  initialState: {
    open: true,
    video: [],
    category: "All",
    suggestion: [],
  },
  reducers: {
    setOpen: (state) => {
      state.open = !state.open;
    },
    setVideo: (state, action) => {
      state.video = action.payload;
    },
    setCategory: (state, action) => {
      state.category = action.payload;
    },
    setSuggestion: (state, action) => {
      state.suggestion = action.payload;
    },
  },
});

export const { setOpen, setVideo, setCategory, setSuggestion } =
  appSlice.actions;
export default appSlice.reducer;
