import React from 'react'

export default function Scoreboard(prop) {
  const unhide = {
    display: (prop.rolls >= 1) ? "block" : "hide"
  }

  return (
    <section className='score-board hide' style={unhide}>
        <div className='score-section stats'>
          <span className="score-labels">Total Rolls: </span><span className='score stats'>{prop.rolls}</span>
        </div>
    </section>
  )
}