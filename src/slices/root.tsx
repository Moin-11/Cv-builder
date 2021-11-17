import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const rootSlice = createSlice({
  name: 'root',
  initialState: { languages: 0 },
  reducers: {
    setLanguages: (state, action: PayloadAction<number>) => {
      state.languages = action.payload;
    },
  },
});

export const reducer = rootSlice.reducer;
export const { setLanguages } = rootSlice.actions;
