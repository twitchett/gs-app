export const ADD_PARTICIPANT = 'gs-app/workouts/ADD_PARTICPANT'
export const CHANGE_VIEW = 'gs-app/CHANGE_VIEW'

export const initialState = {
  view: 'swimming',
  workouts: {
    hiit: {
      title: 'HIIT',
      participants: [],
    },
    swimming: {
      title: 'Swimming',
      participants: ['Sarah'],
    },
    badminton: {
      title: 'Badminton',
      participants: []
    },
    yoga: {
      title: 'Yoga',
      participants: []
    },
    kettlebells: {
      title: 'Kettlebells',
      participants: []
    }
  }
}

export function changeView(view) {
  return { type: CHANGE_VIEW, payload: view }
}

export function addParticipant(payload) {
  return { type: ADD_PARTICIPANT, payload }
}

export const reducer = (state = {}, action = {}) => {
  const { type, payload } = action

  switch (type) {
    case CHANGE_VIEW:
      return { ...state, view: payload }
    case ADD_PARTICIPANT:
      const { workoutId, name } = payload
      const { participants } = state.workouts[workoutId]
      // create new array, don't just append
      const updatedParticipants = [...participants, name]
      const newState = { 
        ...state
      }
      newState.workouts[workoutId].participants = updatedParticipants
      return newState
    default:
      return state
  }
}