import React from 'react'
import line from '/line.svg'
import o1 from '/o1.png';
import o2 from '/o2.png';
import o3 from '/o3.png';
import o4 from '/o4.png';
import o5 from '/o5.png';
import o6 from '/o6.png';
import o7 from '/o7.png';
import o8 from '/o8.png';
import o9 from '/o9.png';
import o10 from '/o10.png';
import o11 from '/o11.png';

const OtherBrand = () => {
    const images = [o1, o2, o3, o4, o5, o6,o7 , o8, o9 , o10 , o11];

    return (
        <section>
            <div className='titleDiv'>
                <h2 >Other Reputed Brands</h2>
                <img src={line} alt="" />
            </div>
            <div className='projectImages '>
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

export default OtherBrand
