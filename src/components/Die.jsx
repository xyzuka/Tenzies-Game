import React from 'react'
import { render } from 'react-dom'

export default function Die(prop) {
  const styles = {
    backgroundColor: prop.isHeld ? "#59E391" : "white"
  }

  // function renderDots(value) {
  //   // if (value === 1) {
  //   //   return (
  //   //     <span className='dot'></span>
  //   //   )
  //   // } 

  //   switch(value) {
  //     case 1:
  //       return (
  //         <div>
  //            <span className={`dot die-${value}`}></span>
  //         </div>
  //       )
  //       break;
      
  //     case 2: 
  //       return (
  //         <div className={`die-${value}`}>
  //           <span className='dot'></span>
  //           <span className='dot'></span>
  //         </div> 
  //       )
  //   }
  // }

  function createDieFace(dieValue) {
    // return (
    //     <div
    //       className={`die`}
    //       style={styles}
    //       id={prop.id}
    //       onClick={prop.holdDice}
    //     >
    //       {renderDots(dieValue)}
    //       {/* <span className='dot'></span> */}
    //     </div>
    //   )
    
    // if (dieValue === 1) {
    //   return (
    //     <div
    //       className="die die-1" 
    //       style={styles}
    //       id={prop.id}
    //       onClick={prop.holdDice}
    //     >
    //       <span className='dot'></span>
    //     </div>
    //   )
    // }

    // Render empty die containers

    // return (
    //   <div
    //     className={`die`}
    //     style={styles}
    //     id={prop.id}
    //     onClick={prop.holdDice}
    //   >
    //       {/* {renderDots(dieValue)} */}
    //       <span className='dot'></span>
    //   </div>
    // )
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

    // createDieFace(prop.value)
  )
}