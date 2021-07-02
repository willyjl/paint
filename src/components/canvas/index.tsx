import { useState } from 'react'
import { connect } from 'react-redux'
import { useCanvas } from 'utils'
import { Tool } from 'models/tool'
import { Coordinate } from 'models/coordinate'
import { State } from 'reducers'

type CanvasComponentProps = {
  tool: Tool
}

const CanvasComponent = ({ tool }: CanvasComponentProps) => {
  const { screen: { width, height }} = window

  const [isPainting, setIsPainting] = useState<boolean>(false)
  const [locations, setLocations] = useState<Array<Coordinate>>([])

  const [canvasRef, context] = useCanvas()

  return (
    <canvas
      ref={canvasRef}
      width={width}
      height={height}
      onMouseDown={({ nativeEvent: { offsetX, offsetY } }) => {
        setIsPainting(true)
        setLocations(
          [...locations, { x: offsetX, y: offsetY }]
        )
      }}
      onMouseUp={() => setIsPainting(false)}
      onMouseMove={({ nativeEvent: { offsetX, offsetY } }) => {
        if (isPainting && context) {
          context.beginPath()

          switch(tool.title) {
            case 'pencil':
              context.lineWidth = 5
              context.strokeStyle = 'black'
              break
            case 'eraser':
              context.lineWidth = 5
              context.strokeStyle = 'white'
              break
          }

          const location = locations[locations.length-1]
          context.moveTo(location.x, location.y)
          context.lineTo(offsetX, offsetY)
          context.stroke()

          setLocations(
            [...locations, { x: offsetX, y: offsetY }]
          )
        }
      }}
    />
  )
}

const mapStateToProps = (state: State) => {
  return { tool: state.selectedTool }
}

export const Canvas = connect(mapStateToProps)(CanvasComponent)
