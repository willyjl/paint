import { useCanvas } from 'utils'

export const Canvas = () => {
  const { screen: { width, height }} = window

  const canvasRef = useCanvas(([canvas, ctx]) => {
    if (canvas === undefined || ctx === undefined) return
    ctx.fillStyle = 'green'
    ctx.fillRect(0, 0, width, height)
  })

  return (
    <canvas ref={canvasRef} width={width} height={height} />
  )
}
