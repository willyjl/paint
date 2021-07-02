import { useRef, useEffect, useState } from 'react'
import { UseCanvasReturnType } from './types'

export const useCanvas = () : UseCanvasReturnType  => {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [context, setContext] = useState<CanvasRenderingContext2D>()

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas?.getContext('2d')
    if (!canvas || !ctx) return
    setContext(ctx)
  }, [])

  return [canvasRef, context]
}
