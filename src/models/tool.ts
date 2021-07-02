import { Coordinate } from 'models/coordinate'

type DrawFunction = (context: CanvasRenderingContext2D, prevCoord: Coordinate, currentCoord: Coordinate) => void

export type Tool = {
  title: 'pencil' | 'eraser'
  icon: string
  lineWidth: number
  color: 'black' | 'white'
  draw: DrawFunction
}

export const Pencil: Tool = {
  title: 'pencil',
  icon: 'pencil',
  lineWidth: 5,
  color: 'black',
  draw(context, prevCoord, currentCoord) {
    context.beginPath()
    context.lineWidth = this.lineWidth
    context.strokeStyle = this.color
    context.moveTo(prevCoord.x, prevCoord.y)
    context.lineTo(currentCoord.x, currentCoord.y)
    context.stroke()
  }
}

export const Eraser: Tool = {
  title: 'eraser',
  icon: 'eraser',
  lineWidth: 5,
  color: 'white',
  draw: Pencil.draw
}

