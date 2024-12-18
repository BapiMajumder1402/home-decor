import React from 'react'
import './intro.css'

const IntroSection = ({small,bold,light}) => {
  return (
    <div className='intro'>
      <h6>{small}</h6>
      <h2 className='boldTxt'>{bold}</h2>
      <div className='lineBox'>
        <h2 className='lightTxt'>{light}</h2>
        <span><img src='/line.svg'/></span>
      </div>
    </div>
  )
}

export default IntroSection
