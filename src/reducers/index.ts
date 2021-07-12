import { combineReducers } from 'redux'
import { toolsReducer } from './tools'
import { paintingReducer } from './painting'

export const reducers = combineReducers({
  tools: toolsReducer,
  painting: paintingReducer
})
