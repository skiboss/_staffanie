import React from 'react'

function Header() {
  return (
      <header className='header'>
        <div className='flex flex-start'>
            <button>Add New +</button>

            <input className='da-search' type='search' placeholder='Search' />
        </div>
    </header>
    
  )
}

export default Header