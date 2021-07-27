import { createSlice, PayloadAction } from '@reduxjs/toolkit';


const initialState: any = {
  launchDetails: {},
};

const slice = createSlice({
  name: `/details`,
  initialState: initialState,
  reducers: {
    launchDetailsApiResponse(state, action: PayloadAction<any>) {
      state.launchDetails = action.payload
    },
  }
})

export const { launchDetailsApiResponse } = slice.actions;

export const detailsReducer = slice.reducer;