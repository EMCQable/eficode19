import SensordataService from '../services/Sensordata'

const sensordataReducer = (state = { Items: [], isFetching: true }, action) => {
  switch (action.type) {
  case 'INIT_SENSOR_DATA':
    return action.data
  default:
    return state
  }
}


export const initData = () => {
  return async (dispatch) => {
    try {
      const sensordata = await SensordataService.getAll()
      dispatch({
        type: 'INIT_SENSOR_DATA',
        data: sensordata
      })
    } catch (e) {
      console.log(e)
    }
  }
}

export default sensordataReducer

