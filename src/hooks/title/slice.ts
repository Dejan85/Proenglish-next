import { createSlice, createAction } from "@reduxjs/toolkit";
import { TITLE_SCOPE } from "./constants";

export const initialState = {
  pageTitle: "",
};

const eventsSlice = createSlice({
  name: TITLE_SCOPE,
  initialState,
  reducers: {
    setPageTitle(state, action) {
      state.pageTitle = action.payload;
    },
  },
});

export const setPageTitleAction =
  createAction<Record<string, any>>("filter_events");

export const { setPageTitle } = eventsSlice.actions;
export const { reducer } = eventsSlice;
