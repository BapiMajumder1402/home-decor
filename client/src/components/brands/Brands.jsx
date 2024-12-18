import React from 'react'
import line from '/line.svg'
import b from '/b.png';
import b1 from '/b1.png';
import b2 from '/b2.png';
import b3 from '/b3.png';
import b4 from '/b4.png';
import b5 from '/b5.png';
import b6 from '/b6.png';
import b7 from '/b7.png';
import b8 from '/b8.png';
import b9 from '/b9.png';
import b10 from '/b10.png';
import b11 from '/b11.png';

const Brands = () => {
    const images = [b, b1, b2, b3, b4, b5, b6, b7, b8, b9, b10, b11];
    return (
        <section style={{ background: "#0A224F" }}>
            <div className='titleDiv'>
                <h2 style={{ color: "#fff" }}>Brands</h2>
                <img src={line} alt="" />
            </div>
            <div className='row g-5' >
                {images.map((e,i)=>(
                    <div className="col-2" key={i}>
                        <img src={e} alt="" />
                    </div>
                ))}
            </div>
            <div className='text-center mt-5'>
                <button className='mt-3'>MANY MORE</button>
            </div>
        </section>
    )
}

export default Brands
