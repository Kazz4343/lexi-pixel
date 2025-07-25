import React from 'react'

const History = () => {
  return (
    <div className='card history-card'>
      <h4>History</h4>
      <p>You have no attemps! Press <b>Start</b> to begin 👊</p>
      <div className='history-list'>
        <div className='card-button-secondary'>
          <div>
            <p>Started</p>
            <h6>14/02/25</h6>
          </div>
          <div>
            <p>Streak</p>
            <h6>53</h6>
          </div>
        </div>
      </div>
    </div>
  )
}

export default History
