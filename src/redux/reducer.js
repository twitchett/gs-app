import { ADD_PARTICIPANT, CHANGE_VIEW } from './actions'

// Initial State
export const initialState = {
  view: 'workoutList',
  workouts: {
    hiit: {
      title: 'HIIT',
      participants: ['Dave'],
    },
    swimming: {
      title: 'Swimming',
      participants: ['Mark'],
    },
    badminton: {
      title: 'Badminton',
      participants: ['Tim']
    },
    yoga: {
      title: 'Yoga',
      participants: ['Sarah', 'Fred']
    },
    kettlebells: {
      title: 'Kettlebells',
      participants: ['Shannon']
    }
  }
}

// Reducer
export default (state = {}, action = {}) => {
  const { type, payload } = action

  switch (type) {
    case CHANGE_VIEW:
      return { ...state, view: payload }

    case ADD_PARTICIPANT:
      const { workoutId, name } = payload
      const { participants } = state.workouts[workoutId]
      // don't add the participant if they already exist
      if (participants.includes(name)) {
        return state
      }
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