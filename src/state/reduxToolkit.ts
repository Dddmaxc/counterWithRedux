// src/features/counter/counterSlice.ts
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type CounterState = {
  value: number;
  startValue: number;
  maxValue: number;
  error: boolean;
  disabled: boolean;
};

const initialState: CounterState = {
  value: 0,
  startValue: 0,
  maxValue: 0,
  error: false,
  disabled: false,
};

const counterSlice = createSlice({
  name: "toolkit",
  initialState,
  reducers: {
    increment(state) {
      if (state.value < state.maxValue) {
        state.value = state.value + 1;
        state.error = false;
      } else {
        state.error = true;
      }
    },
    reset(state) {
      state.value = state.startValue;
      state.error = false;
    },
    setStartValue(state, action: PayloadAction<number>) {
      state.startValue = action.payload;
    },
    setMaxValue(state, action: PayloadAction<number>) {
      state.maxValue = action.payload;
    },
    applySettings(state) {
      if (state.startValue < 0 || state.startValue >= state.maxValue) {
        state.error = true;
        state.disabled = false;
      } else {
        state.value = state.startValue;
        state.error = false;
        state.disabled = true;
      }
    },
    setDisabled(state, action: PayloadAction<boolean>) {
      state.disabled = action.payload;
    }
  },
});

export const {
  increment,
  reset,
  setMaxValue,
  setStartValue,
  applySettings,
  setDisabled,
} = counterSlice.actions;

export default counterSlice.reducer;
