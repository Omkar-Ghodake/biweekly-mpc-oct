import React, { createContext, useState } from 'react'
import { toggleModalBg } from '../utils'

const PowerMenuContext = createContext()

const PowerMenuProvider = ({ children }) => {
  const [showPowerMenu, setShowPowerMenu] = useState(false)

  const togglePowerMenu = (action) => {
    if (action) {
      action === 'open' ? setShowPowerMenu(true) : setShowPowerMenu(false)
      toggleModalBg(action)
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
