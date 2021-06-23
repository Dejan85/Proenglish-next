import { put, call, takeLatest } from "redux-saga/effects";
import { getTitles, fetchTitlesData, getTitleAction, getTitle } from "./slice";
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

// function* getOneBlogDataGenerator(action: any) {
//   try {
//     const id = action.payload;
//     yield put(getOneBlog(id));
//   } catch (error) {
//     yield console.log("test", error);
//   }
// }

export default function* watchBlog() {
  yield takeLatest(fetchTitlesData.type, fetchBlogDataGenerator);
  // yield takeLatest(getOneBlogAction.type, getOneBlogDataGenerator);
}
