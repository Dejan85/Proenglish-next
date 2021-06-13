import { initialState } from "./slice";
import { TITLE_SCOPE } from "./constants";

export const getTitleState = (state: any) => state[TITLE_SCOPE] || initialState;
