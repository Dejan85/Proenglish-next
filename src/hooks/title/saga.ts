import { call, put, takeLatest } from "redux-saga/effects";
import { setPageTitleAction, setPageTitle } from "./slice";

function* setPageTitleGenerator(action: any) {
  yield put(setPageTitle(action.payload));
}

export default function* watchEvent() {
  yield takeLatest(setPageTitleAction.type, setPageTitleGenerator);
}
