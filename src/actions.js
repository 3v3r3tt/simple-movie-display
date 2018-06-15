export const REQUEST_MEDIA_GRID = 'REQUEST_MEDIA_GRID'
export const RECEIVE_MEDIA_GRID = 'RECEIVE_MEDIA_GRID'

export const requestMediaGrid = payload => ({type: REQUEST_MEDIA_GRID, payload})
export const receiveMediaGrid = data => ({type: RECEIVE_MEDIA_GRID, data})
