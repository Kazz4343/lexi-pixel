import React from 'react'

const Countdown = () => {
  return (
    <div className='card countdown-card'>
      <h1 className='item-header'>Day {1}</h1>
      <div className='today-container'>
        <div>
          <p>Time remaining</p>
          <h3>13H 45M 25S</h3>
        </div>
        <div>
          <p>Words for today</p>  
          <h3>16</h3>
        </div>
      </div>

      <button className='start-task'>
        Start
      </button>
    </div>
  )
}

export default Countdown
