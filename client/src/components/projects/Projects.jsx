import React from 'react'
import line from '/line.svg'
import p1 from '/p1.png';
import p2 from '/p2.png';
import p3 from '/p3.png';
import p4 from '/p4.png';
import p5 from '/p5.png';
import p6 from '/p6.png';
import p7 from '/p7.png';
import p8 from '/p8.png';
import p9 from '/p9.png';
import p10 from '/p10.png';

const Projects = () => {
    const images = [p1, p2, p3, p4, p5, p6,p7 , p8, p9 , p10];

    return (
        <section>
            <div className='titleDiv'>
                <h2 >Projects</h2>
                <img src={line} alt="" />
            </div>
            <div className='projectImages'>
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

export default Projects
