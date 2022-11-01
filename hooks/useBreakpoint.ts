import { useEffect, useState } from 'react'
import BREAKPOINTS from '../constants/breakpoints'

const useBreakpoint = () => {
  const [breakpoint, setBreakPoint] = useState('')
  const [windowSize, setWindowSize] = useState(1200)

  const handleResize = () => {
    setWindowSize(window.innerWidth)
  }

  useEffect(() => {
    window.addEventListener('resize', handleResize)
    handleResize()

    if (0 < windowSize && windowSize < 600) {
      setBreakPoint(BREAKPOINTS[0])
    }
    if (600 < windowSize && windowSize < 960) {
      setBreakPoint(BREAKPOINTS[600])
    }
    if (960 < windowSize && windowSize < 1280) {
      setBreakPoint(BREAKPOINTS[960])
    }
    if (1280 < windowSize && windowSize < 1920) {
      setBreakPoint(BREAKPOINTS[1280])
    }
    if (windowSize >= 1920) {
      setBreakPoint(BREAKPOINTS[1920])
    }

    return () => window.removeEventListener('resize', handleResize)
  }, [windowSize])
  return { breakpoint, windowSize }
}

export default useBreakpoint
