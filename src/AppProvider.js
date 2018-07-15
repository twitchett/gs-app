import Expo from 'expo'
import React, { Component } from 'react'
import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import { Provider } from 'react-redux'
import reducer, { initialState } from './redux/reducer'
import { websocketSaga } from './redux/sagas'
import App from './components/app/App'

const sagaMiddleware = createSagaMiddleware()
const store = createStore(
  reducer,
  initialState,
  applyMiddleware(sagaMiddleware)
)

sagaMiddleware.run(websocketSaga)

class AppProvider extends Component {
  render() {
    return (
      <Provider store={store}>
        <App />
      </Provider>
    )
  }
}

export default Expo.registerRootComponent(AppProvider)