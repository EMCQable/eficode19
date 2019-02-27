import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

import dataReducer from './reducers/sensordataReducer'
import filterReducer from './reducers/filterReducer'


const reducer = combineReducers({
  data: dataReducer,
  filters: filterReducer
})

const store = createStore(
  reducer,
  applyMiddleware(thunk)
)

window.appStore = store

export default store

