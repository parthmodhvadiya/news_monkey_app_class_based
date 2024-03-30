import React from 'react'
import loading from './Spinner-1s-75px.svg'
function Loader() {
  return (
    <div className='my-3 text-center'>
        <img src={loading} alt="" />
    </div>
  )
}

export default Loader