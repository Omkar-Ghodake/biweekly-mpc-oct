import React, { createContext, useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'

const PowerMenuContext = createContext()

const PowerMenuProvider = ({ children }) => {
  const [showPowerMenu, setShowPowerMenu] = useState(false)

  const { pathname } = useLocation()

  const togglePowerMenu = (action) => {
    if (action) {
      if (action === 'open') {
        setShowPowerMenu(true)
        document.body.classList.add('power-menu-open')
      } else if (action === 'close') {
        setShowPowerMenu(false)
        document.body.classList.remove('power-menu-open')
      }
    }
    if (showPowerMenu) {
      setShowPowerMenu(false)
      document.body.classList.remove('power-menu-open')
    } else {
      setShowPowerMenu(true)
      document.body.classList.add('power-menu-open')
    }
  }

  return (
    <PowerMenuContext.Provider
      value={{ showPowerMenu, setShowPowerMenu, togglePowerMenu }}
    >
      {children}
    </PowerMenuContext.Provider>
  )
}

export default PowerMenuProvider
export { PowerMenuContext }
