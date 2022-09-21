import './App.css'
import Die from './components/Die'
import React from 'react'
import { nanoid } from 'nanoid'
import Confetti from 'react-confetti'

/**
 * Challenge: Tie off loose ends!
 * 1. If tenzies is true, Change the button text to "New Game"
 * 2. If tenzies is true, use the "react-confetti" package to
 *    render the <Confetti /> component 🎉
 * 
 *    Hint: don't worry about the `height` and `width` props
 *    it mentions in the documentation.
 */

function App() {
  const [diceNumbers, setDiceNumbers] = React.useState(allNewDice())

  const [tenzies, setTenzies] = React.useState(false)

  React.useEffect(() => {
    const allHeld = diceNumbers.every(die => die.isHeld)

    const dieValue = diceNumbers[0].value

    const allSameDieValue = diceNumbers.every(die => die.value === dieValue)

    if (allHeld && allSameDieValue) {
      setTenzies(true)
      console.log('you won!')
    }
  }, [diceNumbers])

  function generateNewDie() {
    return {
        value: Math.ceil(Math.random() * 6),
        isHeld: false,
        id: nanoid(),
    }
  }

  function allNewDice() {
    const newDiceObject = [];
    for (let i = 0; i < 10; i++) {
      newDiceObject.push(generateNewDie())
    }
    return newDiceObject
  }

  function resetGame() {
    setDiceNumbers(allNewDice())
    setTenzies(false)
  }

  function resetDiceNumbers() {
    if (tenzies) {
      return resetGame()
    }

    setDiceNumbers(prevDiceNumbers => prevDiceNumbers.map(die => {
      return die.isHeld ? die : generateNewDie()
    }))
  }

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
        {tenzies && <Confetti />}
        <h2 className='game-header'>Tenzies</h2>
        <div className="game-instructions">
          {tenzies ? "Congratulations! You won!" : "Roll until all dice are the same. Click each die to freeze it at its current value between rolls."}
        </div>
        <div className="die-container">
          {renderedDice}
        </div>
        <button onClick={resetDiceNumbers}>
          {tenzies ? "New Game" : "Roll" }
        </button>
      </main>
  )
}

export default App
