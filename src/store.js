import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

import dataReducer from './reducers/sensordataReducer'


const reducer = combineReducers({
  data: dataReducer
})

const store = createStore(
  reducer,
  applyMiddleware(thunk)
)

window.appStore = store

export default store

