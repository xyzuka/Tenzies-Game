import React from 'react'

export default function Die(prop) {
  const styles = {
    backgroundColor: prop.isHeld ? "#59E391" : "white"
  }
  
  return (
    <div 
      className="die" 
      style={styles}
      id={prop.id}
      onClick={prop.holdDice}
    >
      <h2>{prop.value}</h2>
    </div>
  )
}