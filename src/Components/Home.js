import React from 'react'

function Home() {
  return (
    <div>
         <nav className='navbar'>
                <h1 className='navhead'>USERNAME</h1>
                <div className='navlink'>
                <a href='/Client'>Client</a>
                <a href='/Category'>Category</a>
                <a href='/Employee'>Employee</a>
                </div>
            </nav>
            <h1 className="word">
            WELCOME </h1> 
    </div>
  )
}

export default Home
