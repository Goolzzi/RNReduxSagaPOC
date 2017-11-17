import { FETCHING_DATA, FETCHING_DATA_SUCCESS, FETCHING_DATA_FAILURE } from './constants'
import { put, takeEvery } from 'redux-saga/effects'
import getPeople from './api'

const fetchData = function* fetchData (action) {
  try {
    const data = yield getPeople(action.payload.email)
    yield put({ type: FETCHING_DATA_SUCCESS, data })
  } catch (e) {
    yield put({ type: FETCHING_DATA_FAILURE })
  }
}

const dataSaga = function* dataSaga () {
  yield takeEvery(FETCHING_DATA, fetchData)
}

export default dataSaga