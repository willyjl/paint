import { useState } from 'react'
import { useCanvas } from 'utils'
import { Coordinate } from './types'

export const Canvas = () => {
  const { screen: { width, height }} = window

  const [isPainting, setIsPainting] = useState<boolean>(false)
  // const [locations, setLocations] = useState<Array<Coordinate>>([])
  const [startingLocation, setStartingLocation] = useState<Coordinate>()

  const [canvasRef, context] = useCanvas()

  // if (!canvasRef || !context) return <div>Loading ...</div>

  return (
    <canvas
      ref={canvasRef}
      width={width}
      height={height}
      onMouseDown={({ nativeEvent: { offsetX, offsetY } }) => {
        setIsPainting(true)
        setStartingLocation({ x: offsetX, y: offsetY })
      }}
      onMouseUp={() => setIsPainting(false)}
      onMouseMove={({ nativeEvent: { offsetX, offsetY } }) => {
        if (isPainting && context) {
          // console.log('stroke from', startingLocation, ' to ', { offsetX, offsetY })

          context.beginPath()

          context.lineWidth = 20
          context.strokeStyle = 'green'
          context.moveTo(startingLocation!.x, startingLocation!.y)
          context.lineTo(offsetX, offsetY)
          context.stroke()

          setStartingLocation({ x: offsetX, y: offsetY })
        }
      }}
    />
  )
}
