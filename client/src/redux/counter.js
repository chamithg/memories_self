import { createSlice } from "@reduxjs/toolkit";

export const counterReducer = createSlice({
  name: "counter",
  initialState: {
    count: 0,
  },
  reducers: {
    incremented: (state) => {
      state.count += 1;
    },
    decremented: (state) => {
      state.count -= 1;
    },
    changed: (state, action) => {
      const val = Number(action.payload);
      console.log(typeof val);
      state.count += val;
    },
  },
});
export const { incremented, decremented, changed } = counterReducer.actions;
export default counterReducer.reducer;
