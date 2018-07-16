import io from 'socket.io-client'
import { eventChannel } from 'redux-saga'
import { call, put, take } from 'redux-saga/effects'
import { ADD_PARTICIPANT } from './actions'

const WEBSOCKET_URL = `http://${process.env.REACT_NATIVE_HOST_IP}:3000`
const PARTICIPANT_CHANGE_EVENT = 'PARTICIPANT_CHANGE'

const createSocketConnection = () => {
  console.log('trying to connect on ', WEBSOCKET_URL)
  const socket = io(WEBSOCKET_URL)
  return new Promise(resolve => {
    socket.on('connect', () => resolve(socket))
  })
}

const createSocketChannel = socket => 
  eventChannel(emit => {
    const eventHandler = data => {
      const { name, workoutId, checkedIn } = data
      if (checkedIn) {
        emit({ type: ADD_PARTICIPANT, payload: { name, workoutId } })
      }
    }

    socket.on(PARTICIPANT_CHANGE_EVENT, eventHandler)

    const unsubscribe = () => {
      socket.off(PARTICIPANT_CHANGE_EVENT, eventHandler)
    }

    return unsubscribe
  }
)

export const websocketSaga = function*() {
  try {
    const socket = yield call(createSocketConnection)
    const socketChannel = yield call(createSocketChannel, socket)

    while (true) {
      const payload = yield take(socketChannel)
      yield put(payload)
    }
  } catch (e) {
    console.log('oh dear, something bad happened', e)
  }
}
