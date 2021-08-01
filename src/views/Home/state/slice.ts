import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState: any = {
  launches: [],
};

const slice = createSlice({
  name: `/home`,
  initialState: initialState,
  reducers: {
    launchApiResponse(state, action: PayloadAction<any>) {
      state.launches = action.payload.launches
    },
  }
})

export const { launchApiResponse } = slice.actions;

export const homeReducer = slice.reducer;