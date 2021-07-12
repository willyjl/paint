import { Coordinate } from 'models/coordinate'
import { Tool } from 'models/tool'

type ActionTypeString = 'START_PAINTING' |
  'PAINTING' |
  'STOP_PAINTING' |
  'SELECT_TOOL' |
  'SET_WIDTH' |
  'SET_COLOR'

export type PaintingState = {
  isActive: boolean
  prevCoord?: Coordinate | null 
}

export type ActionType = {
  type: ActionTypeString
  tool: Tool
  coord: Coordinate
  width: number
  color: string
}

export type State = {
  tools: Tool[]
  painting: PaintingState
}
