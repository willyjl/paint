import { connect } from 'react-redux'
import { useCanvas } from 'utils'
import { Tool } from 'models/tool'
import { Coordinate } from 'models/coordinate'
import { startPainting, painting, stopPainting } from 'actions'
import { State } from 'reducers/type'

type CanvasComponentProps = {
  tool: Tool | undefined
  prevCoord?: Coordinate | null
  isPainting: boolean,
  startPainting: Function,
  painting: Function,
  stopPainting: Function
}

const CanvasComponent = ({ tool, prevCoord, isPainting, startPainting, painting, stopPainting }: CanvasComponentProps) => {
  const { screen: { width, height }} = window
  const [canvasRef, context] = useCanvas()

  return (
    <canvas
      ref={canvasRef}
      width={width}
      height={height}
      onMouseDown={({ nativeEvent: { offsetX: x, offsetY: y } }) => startPainting({ x, y })}
      onMouseUp={() => stopPainting()}
      onMouseMove={({ nativeEvent: { offsetX: x, offsetY: y } }) => {
        if (isPainting && tool && context && prevCoord) {
          const currentCoord = { x, y }
          tool.draw(context, prevCoord, currentCoord)
          painting(currentCoord)
        }
      }}
    />
  )
}

const mapStateToProps = (state: State) => (
  {
    tool: state.tools.find(t => t.selected),
    prevCoord: state.painting.prevCoord,
    isPainting: state.painting.isActive
  }
)

export const Canvas = connect(
  mapStateToProps,
  { startPainting, painting, stopPainting }
)(CanvasComponent)
