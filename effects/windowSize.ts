import { useEffect, useState } from 'react';

export default function windowSize() {
  const [windowSize, setWindowSize] = useState({
    width: 0,
    height: 0,
    isMobile: true,
    isTablet: false,
    isTabletUp: false,
    isDesktopUp: false,
  })

  useEffect(() => {
    function handleResize() {
      const tabletBreakpoint = parseInt(getComputedStyle(document.documentElement).getPropertyValue('--tablet-breakpoint'), 10)
      const desktopBreakpoint = parseInt(getComputedStyle(document.documentElement).getPropertyValue('--tablet-desktop'), 10)
      const width = window.innerWidth

      setWindowSize({
        height: window.innerHeight,
        width,
        isMobile: width <= tabletBreakpoint,
        isTablet: width > tabletBreakpoint && width <= desktopBreakpoint,
        isTabletUp: width > tabletBreakpoint,
        isDesktopUp: width > desktopBreakpoint,
      })
    }

    window.addEventListener('resize', handleResize)
    handleResize()

    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return windowSize
}
