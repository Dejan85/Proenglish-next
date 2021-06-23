import { initialState } from "./slice";
import { LAYOUT_SCOPE } from "./constants";

export const getTitlesData = (state: any) =>
  state[LAYOUT_SCOPE] || initialState;
