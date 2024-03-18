import React from 'react'
import { Link } from 'react-router-dom'

function Error() {
  return (
    <div>
        Error Page
        <div>
            <Link to="/signin"><button type="submit" className='btn-signin'>Back to sign in</button></Link>
        </div>
    </div>
  )
}

export default Error