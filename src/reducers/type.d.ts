import { Coordinate } from 'models/coordinate'
import { Tool } from 'models/tool'

export type PaintingMode = {
  isActive: boolean
  prevCoord?: Coordinate | null 
}

export type ActionType = {
  type: 'START_PAINTING' |
    'PAINTING' |
    'STOP_PAINTING' |
    'SELECT_TOOL' |
    'SET_WIDTH' |
    'SET_COLOR'
  tool: Tool | null
  coord: Coordinate
  width: number
  color: string
}

export type State = {
  tools: Tool[]
  selectedTool: Tool
  paintingMode: PaintingMode
}
