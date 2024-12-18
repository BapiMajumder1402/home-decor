import React from 'react'
import line from '/line.svg'
import g1 from '/g1.png';
import g2 from '/g2.png';
import g3 from '/g3.png';
import g4 from '/g4.png';
import g5 from '/g5.png';

import g8 from '/g6.png';
import g9 from '/g7.png';

const Govt = () => {
    const images = [g1, g2, g3, g4, g5, g8, g9];

    return (
        <section className='govt'>
            <div className='titleDiv'>
                <h2 >Government Organizations</h2>
                <img src={line} alt="" />
            </div>
            <div className='govtImages'>
                {images.map((image, i) =>(
                    <div key={i}>
                        <img src={image} alt="" />
                    </div>
                ))}
            </div>
            <div className='text-center mt-5'>
                <button className='mt-3'>MANY MORE</button>
            </div>
        </section>
    )
}

export default Govt
