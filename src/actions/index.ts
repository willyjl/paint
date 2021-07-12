import { Tool } from 'models/tool'
import { Coordinate } from 'models/coordinate'

export const selectTool = (tool: Tool) => (
  {
    type: 'SELECT_TOOL',
    tool
  }
)

export const startPainting = (coord: Coordinate) => (
  {
    type: 'START_PAINTING',
    coord 
  }
)

export const painting = (coord: Coordinate) => (
  {
    type: 'PAINTING',
    coord
  }
)

export const stopPainting = () => (
  {
    type: 'STOP_PAINTING'
  }
)

export const setWidth = (width: number) => (
  {
    type: 'SET_WIDTH',
    width
  }
)

export const setColor = (color: string) => (
  {
    type: 'SET_COLOR',
    color
  }
)
