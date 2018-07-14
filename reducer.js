export const ADD_PARTICIPANT = 'gs-app/workouts/ADD_PARTICPANT'

export const initialState = {
  workouts: {
    hiit: [],
    swimming: [],
    badminton: [],
    yoga: [],
    kettlebells: []
  }
}

export const reducer = (state = {}, action = {}) => {
  switch (action.type) {
    case ADD_PARTICIPANT:
      // TODO
      return state
    default:
      return state
  }
}