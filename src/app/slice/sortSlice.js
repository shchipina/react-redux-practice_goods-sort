import { createSlice } from '@reduxjs/toolkit';

export const initialState = {
  sortField: '',
  isReversed: false,
  selectedGood: '',
};

export const sortSlice = createSlice({
  name: 'sortBy',
  initialState,
  reducers: {
    sort: (state, action) => {
      state.sortField = action.payload;
    },

    toggleReversed: state => {
      state.isReversed = !state.isReversed;
    },

    setSelectedGood: (state, action) => {
      if (state.selectedGood === action.payload) {
        state.selectedGood = '';
      } else {
        state.selectedGood = action.payload;
      }
    },

    reset: state => {
      state.sortField = '';
      state.isReversed = false;
    },
  },
});

export const {
  reset,
  sort,
  setSelectedGood,
  toggleReversed,
} = sortSlice.actions;

export default sortSlice.reducer;
