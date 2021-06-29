import { useRef, useEffect } from 'react'

export const useCanvas = (callback: CanvasCallback) => {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas?.getContext('2d')
    callback([canvas ?? undefined, ctx ?? undefined])
  }, [callback])

  return canvasRef
}
