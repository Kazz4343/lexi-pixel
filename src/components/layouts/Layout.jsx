import React from 'react'

const Layout = (props) => {
  
  const {children} = props

  return (
    <>
      <header>
        <h1 className='text-gradient'>Lexi-Pixel</h1>
      </header>
      <main>
        {children}
      </main>
      <footer>
        <small>Created by </small>
        <a target='_blank' href='https://github.com/Kazz4343/lexi-pixel'>
          <img alt='picture-profile' src='https://avatars.githubusercontent.com/u/204547563?v=4' />
          <p>@Kazz4343</p>
          <i class="fa-brands fa-github"></i>
        </a>
      </footer>
    </>
  )
}

export default Layout
