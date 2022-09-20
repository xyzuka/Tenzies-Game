import './App.css'
import Die from './components/Die'
import React from 'react'
import { nanoid } from 'nanoid'

function App() {
  const [diceNumbers, setDiceNumbers] = React.useState(allNewDice)

  function allNewDice() {
    const newDiceObject = [];

    for (let i = 0; i < 10; i++) {
      const randomDice = Math.ceil(Math.random() * 6);

      const newDieRoll = {
        value: randomDice,
        isHeld: false,
        nanoid: nanoid()
      }

      newDiceObject.push(newDieRoll);
    }

    return newDiceObject
  }

  const renderedDice = diceNumbers.map((die) => {
    return <Die
      value={die.value}
      isHeld={die.isHeld}
      key={die.nanoid}
    />
  })

  function resetDiceNumbers() {
    setDiceNumbers(prevDiceNumbers => {
      return prevDiceNumbers = allNewDice()
    })
  }
 
  return (
      <main className='game-container'>
        <div className="die-container">
          {renderedDice}
        </div>
        <button onClick={resetDiceNumbers}>Roll</button>
      </main>
  )
}

export default App
