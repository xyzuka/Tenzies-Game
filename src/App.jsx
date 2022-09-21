import './App.css'
import Die from './components/Die'
import React from 'react'
import { nanoid } from 'nanoid'

/**
 * Challenge: Update the `rollDice` function to not just roll
 * all new dice, but instead to look through the existing dice
 * to NOT role any that are being `held`.
 * 
 * Hint: this will look relatively similiar to the `holdDice`
 * function below. When creating new dice, remember to use
 * `id: nanoid()` so any new dice have an `id` as well.
 */

function App() {
  const [diceNumbers, setDiceNumbers] = React.useState(allNewDice())

  function generateNewDie() {
    const randomDice = Math.ceil(Math.random() * 6);
    return {
        value: randomDice,
        isHeld: false,
        id: nanoid()
    }
  }

  function allNewDice() {
    const newDiceObject = [];
    for (let i = 0; i < 10; i++) {
      // const newDieRoll = generateNewDie();
      newDiceObject.push(generateNewDie());
    }
    return newDiceObject
  }

  function resetDiceNumbers() {
    setDiceNumbers(allNewDice())
  }

  
  ////

  // function resetDiceNumbers() {
  //   setDiceNumbers(prevDiceNumbers => prevDiceNumbers.map(die => {
  //     return die.isHeld ? die : allNewDice
  //   }))
  // }

  function holdDice(id) {
    setDiceNumbers(prevDiceNumbers => prevDiceNumbers.map(die => {
      return die.id === id ?
      {...die, isHeld: !die.isHeld} :
      die
    }))
  }

  const renderedDice = diceNumbers.map((die) => {
    return <Die
      value={die.value}
      isHeld={die.isHeld}
      key={die.id}
      holdDice={() => holdDice(die.id)}
    />
  })
 
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
