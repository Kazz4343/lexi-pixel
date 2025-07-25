import React from 'react'
import Stats from '../Stats'
import Countdown from '../Countdown'
import History from '../History'


const Dashboard = () => {
  return (
    <section id='dashboard'>
      <Stats />
      <Countdown />
      <History />
    </section>
  )
}

export default Dashboard
