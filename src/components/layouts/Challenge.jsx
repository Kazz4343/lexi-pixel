import React from 'react'
import ProgressBar from '../ProgressBar'

const Challenge = () => {
  
  const word = 'copacetic'
  const definition = "In excellent order"

  return (
      <section id='challenge'>
        <h1>{word}</h1>
        <p>{definition}</p>
        <div className='helper'>
          <div>
            {[...Array(definition.length).keys()].map((element, elementIndex)=>{
              return(
                <div key={elementIndex}>  </div>
              )
            })}
          </div>
          <input type='text' placeholder='Enter the definition...' />
        </div>
        
        <div className='challenge-btns'>
            <button className='card-button-secondary'>
              <h6>Quit</h6>
            </button>
            <button className='card-button-primary'>
              <h6>I forget</h6>
            </button>
        </div>
        <ProgressBar />
      </section>
  )
}

export default Challenge
