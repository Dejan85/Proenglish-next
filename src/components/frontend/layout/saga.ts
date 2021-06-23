import { put, call, takeLatest } from "redux-saga/effects";
import { getTitles, fetchTitlesData } from "./slice";
import { request } from "src/utils/requests";

function* fetchBlogDataGenerator() {
  try {
    const url: string = "api/titles";
    const response: object = yield call(request, url, "GET");

    yield put(getTitles(response));
  } catch (error) {
    yield console.log("test", error);
  }
}

export default function* watchBlog() {
  yield takeLatest(fetchTitlesData.type, fetchBlogDataGenerator);
}
