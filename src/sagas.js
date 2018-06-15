import { call, put, takeLatest } from 'redux-saga/effects'
import {
  REQUEST_MEDIA_GRID,
  receiveMediaGrid,
} from './actions'

import { fetchData } from './api'

function* getMediaGrid(action) {
  try {
    const requestURL = 'https://hoopla-ws-dev.hoopladigital.com/kinds/7/titles/featured?offset=0&limit=51&kindId=7'
    const data = yield call(fetchData, requestURL)
    yield put(receiveMediaGrid(data))
  } catch (e) {
    console.log(e)
  }
}

function* mediaSaga() {
  yield takeLatest('REQUEST_MEDIA_GRID', getMediaGrid)
}

export default mediaSaga
