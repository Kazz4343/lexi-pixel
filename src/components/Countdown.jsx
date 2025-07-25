import React, { useState } from 'react'
import { convertMilliseconds, countdownIn24Hours } from '../utils'

const Countdown = (props) => {
  
  const {handleChangePage, daysWords, datetime, day} = props

  const targetMillis = datetime || Date.UTC(1944, 2, 15, 12, 0, 0)
  const [remainingMs, setRemainingMs] = useState(countdownIn24Hours(targetMillis))
  const timer = convertMilliseconds(remainingMs)



  return (
    <div className='card countdown-card'>
      <h1 className='item-header'>Day {1}</h1>
      <div className='today-container'>
        <div>
          <p>Time remaining</p> 
          <h3>{datetime ? `${Math.abs(timer.hours)}H ${Math.abs(timer.minutes)}M ${Math.abs(timer.seconds)}S` 
          : '23H 59M 59S ' }</h3>
        </div>
        <div>
          <p>Words for today</p>  
          <h3>{daysWords.length}</h3>
        </div>
      </div>

      <button className='start-task' onClick={() => {
        handleChangePage (2)
      }}>
        Start
      </button>
    </div>
  )
}

export default Countdown
