import React from 'react'
import line from '/line.svg'
const Heading = ({ text }) => {
    return (
        <><h2 className='heading'>{text}</h2> <img src={line} alt="" /></>
    )
}

export default Heading
