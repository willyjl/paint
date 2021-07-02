import { useRef, useEffect, useState, LegacyRef } from 'react'

type UseCanvasReturnType = [
  LegacyRef<HTMLCanvasElement>,
  CanvasRenderingContext2D | null | undefined
]

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
