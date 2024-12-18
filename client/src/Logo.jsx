import React from 'react'
import home from '/HOME.svg'
import decor from '/Decor.png'
const Logo = () => {
  return (
    <div className='d-flex align-items-center gap-2'>
      <img src={home} alt="" height="40"/>
      <img src={decor} alt="" height="35"/>
    </div>
  )
}

export default Logo

