import { Coordinate } from 'models/coordinate'

type DrawFunction = (context: CanvasRenderingContext2D, prevCoord: Coordinate, currentCoord: Coordinate) => void

type ToolTitle = 'pencil' | 'eraser'

export interface Tool {
  title: ToolTitle
  icon: string
  lineWidth: number | null
  color: string
  draw: DrawFunction
}

class BasicTool implements Tool {
  title = 'pencil' as ToolTitle
  icon = 'pencil'
  lineWidth = 1
  color = '#000000'

  constructor(title: ToolTitle, icon: string, color: string) {
    this.title = title
    this.icon = icon
    this.color = color
  }

  draw(context: CanvasRenderingContext2D, prevCoord: Coordinate, currentCoord: Coordinate) {
    if (this.lineWidth === null) return
    context.beginPath()
    context.lineWidth = this.lineWidth!
    context.strokeStyle = this.color
    context.moveTo(prevCoord.x, prevCoord.y)
    context.lineTo(currentCoord.x, currentCoord.y)
    context.stroke()
  }
}

export const pencil = new BasicTool('pencil', 'pencil', '#000000')
export const eraser = new BasicTool('eraser', 'eraser', '#ffffff')
