export const ADD_PARTICIPANT = 'gs-app/workouts/ADD_PARTICPANT'

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

export const reducer = (state = {}, action = {}) => {
  switch (action.type) {
    case ADD_PARTICIPANT:
      // TODO
      return state
    default:
      return state
  }
}