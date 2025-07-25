import React from 'react'
import Layout from './components/layouts/Layout'
import Dashboard from './components/layouts/Dashboard'
import Welcome from './components/layouts/Welcome'
import Challenge from './components/layouts/Challenge'

const App = () => {
  
  const selectedPage = 2 // 0 => welcome, 1 => dashboard, 2 => challenge

  const pages = {
    0: <Welcome />,
    1: <Dashboard />,
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



