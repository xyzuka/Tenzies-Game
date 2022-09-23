import './App.css'
import Die from './components/Die'
import Scoreboard from './components/Scoreboard'
import React from 'react'
import { nanoid } from 'nanoid'
import Confetti from 'react-confetti'

function App() {
  const [diceNumbers, setDiceNumbers] = React.useState(allNewDice())

  const [tenzies, setTenzies] = React.useState(false)

  const [rollCount, setRollCount] = React.useState(0)

  React.useEffect(() => {
    const allHeld = diceNumbers.every(die => die.isHeld)

    const dieValue = diceNumbers[0].value

    const allSameDieValue = diceNumbers.every(die => die.value === dieValue)

    if (allHeld && allSameDieValue) {
      setTenzies(true)
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
    setRollCount(0)
  }

  function resetDiceNumbers() {
    if (tenzies) {
      return resetGame()
    }

    setDiceNumbers(prevDiceNumbers => prevDiceNumbers.map(die => {
      return die.isHeld ? die : generateNewDie()
    }))

    setRollCount(prevRollCount => 
      ++prevRollCount)
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
    <div className='app-content'>
      <main className='game-container'>
        {tenzies && <Confetti />}
        <h2 className='game-header'>Tenzies</h2>
        <div className="game-instructions">
          {tenzies ? `Congratulations! You won! You rolled the dice ${rollCount} times.` : "Roll until all dice are the same. Click each die to freeze it at its current value between rolls."}
        </div>
        <div className="die-container">
          {renderedDice}
        </div>
        <button onClick={resetDiceNumbers}>
          {tenzies ? "New Game" : "Roll" }
        </button>
      </main>

      <Scoreboard 
        rolls={rollCount}
      />
    </div>
  )
}

export default App
