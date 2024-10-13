import React, { createContext, useEffect, useState } from 'react'
import { toggleModalBg } from '../utils'
import { CARDS_DATA } from '../data'

const ScoreCardContext = createContext()

const ScoreCardProvider = ({ children }) => {
  const [selectedScoreCard, setSelectedScoreCard] = useState(null)
  const [selectedScoreCardDetails, setSelectedScoreCardDetails] = useState(null)

  const toggleScoreCardModal = (action, index) => {
    action === 'open' ? setSelectedScoreCard(index) : setSelectedScoreCard(null)
    toggleModalBg(action)
  }

  useEffect(() => {
    selectedScoreCard &&
      setSelectedScoreCardDetails(CARDS_DATA[selectedScoreCard])

    console.log('selectedScoreCardDetails', selectedScoreCardDetails)
  }, [selectedScoreCard])

  return (
    <ScoreCardContext.Provider
      value={{
        selectedScoreCard,
        setSelectedScoreCard,
        toggleScoreCardModal,
        selectedScoreCardDetails,
      }}
    >
      {children}
    </ScoreCardContext.Provider>
  )
}

export default ScoreCardProvider
export { ScoreCardContext }
