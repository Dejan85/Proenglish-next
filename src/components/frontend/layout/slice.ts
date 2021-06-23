import { createSlice, createAction } from "@reduxjs/toolkit";
import { LAYOUT_SCOPE } from "./constants";
import { InitialStateType } from "./types";

export const initialState: InitialStateType = {
  titles: [],
};

const titlesSlice = createSlice({
  name: LAYOUT_SCOPE,
  initialState,
  reducers: {
    getTitles(state, action) {
      const { data } = action.payload;
      state.titles = data;
    },
  },
});

export const fetchTitlesData = createAction("get_blog_data");
export const getTitleAction = createAction<Record<string, any>>("get_one_data");

export const { getTitles } = titlesSlice.actions;
export const { reducer } = titlesSlice;
