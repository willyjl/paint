import { combineReducers } from 'redux'
import { toolsReducer } from './tools'
import { selectToolReducer } from './selectTool'
import { paintingModeReducer } from './paintingMode'

export const reducers = combineReducers({
  tools: toolsReducer,
  selectedTool: selectToolReducer,
  paintingMode: paintingModeReducer
})
