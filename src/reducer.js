export const ADD_PARTICIPANT = 'gs-app/workouts/ADD_PARTICPANT'
export const CHANGE_VIEW = 'gs-app/CHANGE_VIEW'

export const initialState = {
  view: 'workoutList',
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

export const reducer = (state = {}, action = {}) => {
  const { type, payload } = action

  switch (type) {
    case CHANGE_VIEW:
      return { ...state, view: payload }
    case ADD_PARTICIPANT:
      // TODO
      return state
    default:
      return state
  }
}