import Expo from 'expo'
import React, { Component } from 'react'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import { reducer, initialState } from './reducer'
import { App } from './App'

const store = createStore(reducer, initialState)

class AppProvider extends Component {
  render() {
    return (
      <Provider store={store}>
        <App store={store} />
      </Provider>
    )
  }
}

export default Expo.registerRootComponent(AppProvider)