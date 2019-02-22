let today = new Date()
let oneWeekAgo = new Date()
oneWeekAgo.setDate(today.getDate() - 7);

const initialstate = {
  sensor1: {
    start: oneWeekAgo,
    end: today,
    view_length: 'week'
  },
  sensor2: {
    start: oneWeekAgo,
    end: today,
    view_length: 'week'
  },
  sensor3: {
    start: oneWeekAgo,
    end: today,
    view_length: 'week'
  },
  sensor4: {
    start: oneWeekAgo,
    end: today,
    view_length: 'week'
  }
}

const sensordataReducer = (state = initialstate, action) => {
  let newStart = new Date()
  let newEnd = new Date()
  switch (action.type) {
    case 'MOVE_FILTER_BACKWARD':
      let backMove = 7
      if (state[action.sensor].view_length === 'day') {
        backMove = 1
      }
      newStart.setDate(state[action.sensor].start.getDate() - backMove)
      newEnd.setDate(state[action.sensor].end.getDate() - backMove)
      return { ...state, [action.sensor]: { ...state[action.sensor], start: newStart, end: newEnd } }

    case 'MOVE_FILTER_FORWARD':
      let foreMove = 7
      if (state[action.sensor].view_length === 'day') {
        foreMove = 1
      }
      if (today.getDate() - state[action.sensor].end.getDate() < foreMove) {
        newStart.setDate(today.getDate() - foreMove);
        return { ...state, [action.sensor]: { ...state[action.sensor], start: newStart, end: today } }
      }
      newStart.setDate(state[action.sensor].start.getDate() + foreMove)
      newEnd.setDate(state[action.sensor].end.getDate() + foreMove)
      return { ...state, [action.sensor]: { ...state[action.sensor], start: newStart, end: newEnd } }

    case 'SWITCH_TO_WEEK':
      newStart.setDate(state[action.sensor].start.getDate() - 6)
      return { ...state, [action.sensor]: { ...state[action.sensor], start: newStart, view_length: 'week' } }

    case 'SWITCH_TO_DAY':
      newStart.setDate(state[action.sensor].start.getDate() + 6)
      return { ...state, [action.sensor]: { ...state[action.sensor], start: newStart, view_length: 'day' } }

    default:
      return state
  }
}


export const backward = (sensor) => {
  return async (dispatch) => {
    try {
      dispatch({
        type: 'MOVE_FILTER_BACKWARD',
        sensor
      })
    } catch (e) {
      console.log(e)
    }
  }
}

export const forward = (sensor) => {
  return async (dispatch) => {
    try {
      dispatch({
        type: 'MOVE_FILTER_FORWARD',
        sensor
      })
    } catch (e) {
      console.log(e)
    }
  }
}

export const weekview = (sensor) => {
  return async (dispatch) => {
    try {
      dispatch({
        type: 'SWITCH_TO_WEEK',
        sensor
      })
    } catch (e) {
      console.log(e)
    }
  }
}

export const dayview = (sensor) => {
  return async (dispatch) => {
    try {
      dispatch({
        type: 'SWITCH_TO_DAY',
        sensor
      })
    } catch (e) {
      console.log(e)
    }
  }
}

export default sensordataReducer

