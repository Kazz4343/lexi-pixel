import React from 'react'

const History = (props) => {
  
  const {history} = props
  const historyKeys = Object.keys(history)

  return (
    <div className='card history-card'>
      <h4>History</h4>
      {historyKeys.length == 0 ? (
        <p>You have no attemps! Press <b>Start</b> to begin 👊</p>
      ) : (
        <div className='history-list'>
          {historyKeys.map((item, itemIndex)=>{
            const dateKey = (new Date(item)).toString().split(' ').slice(1, 4).join(' ')
            return (
              <div key={itemIndex} className='card-button-secondary'>
                <div>
                  <p>Started</p>
                  <h6>{dateKey}</h6>
                </div>
                <div>
                  <p>Streak</p>
                  <h6>{history[item]}</h6>
                </div>
              </div>
            )
          })}
          
        </div>
      )}
      
    </div>
  )
}

export default History
