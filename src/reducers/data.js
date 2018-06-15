import { RECEIVE_MEDIA_GRID } from '../actions'

export default (state=[], {type, data}) => {
  switch (type) {
    case RECEIVE_MEDIA_GRID:
      return data
    default:
      return state
  }
}
