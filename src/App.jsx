import React, { useState, useEffect } from 'react'
import Layout from './components/layouts/Layout'
import Dashboard from './components/layouts/Dashboard'
import Welcome from './components/layouts/Welcome'
import Challenge from './components/layouts/Challenge'

import WORDS from './utils/VOCAB.json'
import {PLAN, getWordByIndex} from './utils'

const App = () => {
  const [selectedPage, setSelectedPage] = useState(0)
  // const selectedPage = 2 // 0 => welcome, 1 => dashboard, 2 => challenge

  const [name, setName] = useState('')
  const [day, setDay] = useState(1)
  const [datetime, setDatetime] = useState(null)
  const [history, setHistory] = useState([])
  const [attemps, setAttemps] = useState(0)

  const daysWords = PLAN[day].map((index) => {
    return getWordByIndex(WORDS, index).word
  })



  function handleChangePage(pageIndex) {
    setSelectedPage(pageIndex)
  }

  function handleCreateAccount () {
    if (!name) {return}
    localStorage.setItem('username', name)

    handleChangePage(1)
  }

  useEffect(()=>{
    if (!localStorage) {return} //If I have none in there GETOUT IMMEDIATELY

    if (localStorage.getItem('username')) {
      // If find something, enter Dashboard YAY
      setName(localStorage.getItem('username'))

      setSelectedPage(1)
    }
  }, [])


  const pages = {
    0: <Welcome name={name} setName={setName} handleChangePage={handleChangePage} handleCreateAccount={handleCreateAccount} />,
    1: <Dashboard name={name} day={day} attemps={attemps} PLAN={PLAN} handleChangePage={handleChangePage} daysWords={daysWords} datetime={datetime} history={history}/>,
    2: <Challenge />
  }
  
  return (
    <div>
      <Layout>
        {pages[selectedPage]}
      </Layout>
      
    </div>
  )
}

export default App



