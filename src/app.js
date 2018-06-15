import React, { Component } from 'react'
import { Provider } from 'react-redux'
import './app.css'

import store from './store'

import Grid from './components/mediaGrid'

export default () => {
  return (
    <Provider store={store}>
      <Grid />
    </Provider>
  )
}
