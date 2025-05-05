
import * as React from "react"

const MOBILE_BREAKPOINT = 768

export function useIsMobile() {
  const [isMobile, setIsMobile] = React.useState<boolean>(false)

  React.useEffect(() => {
    const checkMobileView = () => {
      setIsMobile(window.innerWidth < MOBILE_BREAKPOINT)
    }
    
    // Initial check
    checkMobileView()
    
    // Add event listener for resize
    window.addEventListener('resize', checkMobileView)
    
    // Cleanup
    return () => window.removeEventListener('resize', checkMobileView)
  }, [])

  return isMobile
}
