import React from 'react'
import { render } from 'react-dom'

export default function Die(prop) {
  const styles = {
    backgroundColor: prop.isHeld ? "#59E391" : "white"
  }

  function createDieFace(value) {
  switch(value) {
    case 1:
      return (
        <div
          className={`die die-${value}`}
          style={styles}
          id={prop.id}
          onClick={prop.holdDice}
        >
            <span className='dot'></span>
        </div>
      )
      break;

    case 2: 
      return (
        <div
          className={`die die-${value}`}
          style={styles}
          id={prop.id}
          onClick={prop.holdDice}
        >
            <span className='dot'></span>
            <span className='dot'></span>
        </div>
      )
      break;
    
    case 3: 
      return (
        <div
          className={`die die-${value}`}
          style={styles}
          id={prop.id}
          onClick={prop.holdDice}
        >
            <span className='dot'></span>
            <span className='dot'></span>
            <span className='dot'></span>
        </div>
      )
      break;

    case 4: 
      return (
        <div
          className={`die die-${value}`}
          style={styles}
          id={prop.id}
          onClick={prop.holdDice}
        >
          <div className="column">
            <span className='dot'></span>
            <span className='dot'></span>
          </div>
          <div className="column">
            <span className='dot'></span>
            <span className='dot'></span>
          </div>      
        </div>
      )
      break;
      
      case 5: 
      return (
        <div
          className={`die die-${value}`}
          style={styles}
          id={prop.id}
          onClick={prop.holdDice}
        >
          <div className="column">
            <span className='dot'></span>
            <span className='dot'></span>
          </div>
          <div className="column">
            <span className='dot'></span>
          </div>
          <div className="column">
            <span className='dot'></span>
            <span className='dot'></span>
          </div>      
        </div>
      )
      break;

      case 6: 
      return (
        <div
          className={`die die-${value}`}
          style={styles}
          id={prop.id}
          onClick={prop.holdDice}
        >
          <div className="column">
            <span className='dot'></span>
            <span className='dot'></span>
            <span className='dot'></span>
          </div>
          <div className="column">
            <span className='dot'></span>
            <span className='dot'></span>
            <span className='dot'></span>
          </div>      
        </div>
      )
      break;
    }
  }
      
  return (
    createDieFace(prop.value)
  )
}