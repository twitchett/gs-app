export const ADD_PARTICIPANT = 'gs-app/workouts/ADD_PARTICPANT'
export const CHANGE_VIEW = 'gs-app/CHANGE_VIEW'

export function changeView(view) {
  return { type: CHANGE_VIEW, payload: view }
}

export function addParticipant(payload) {
  return { type: ADD_PARTICIPANT, payload }
}

