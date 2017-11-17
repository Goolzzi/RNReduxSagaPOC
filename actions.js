import { FETCHING_DATA } from './constants'

export function fetchData(email) {
  return {
    type: FETCHING_DATA,
    payload: { email },
  }
}