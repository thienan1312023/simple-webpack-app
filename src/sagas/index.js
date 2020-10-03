import { put, takeLatest, all } from 'redux-saga/effects';

function* fetchData(action) {

  const json = yield fetch(`https://hn.algolia.com/api/v1/search?query=${action.payload.searchValue}`)
    .then(response => response.json())

  yield put({ type: "DATA_RECEIVED", data: json.hits || [{ error: json.message }] });
}

function* actionWatcher() {
  yield takeLatest('GET_SEARCH_DATA', fetchData)
}


export default function* rootSaga() {
  yield all([
    actionWatcher(),
  ]);
}
