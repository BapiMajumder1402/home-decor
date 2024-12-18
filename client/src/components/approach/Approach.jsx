import React from 'react';
import IntroSection from '../introSection/IntroSection';
import icon4 from '/Icon (4).png';
import icon1 from '/Icon (1).png';
import icon2 from '/Icon (2).png';
import icon3 from '/Icon (3).png';
import './approach.css';

const Approach = () => {
    return (
        <section className='approach'>
            <IntroSection small={"Our APPROACH"} bold={"Transforming Spaces "} light={"With Unique Interior Design & Wallpapers"} />
            <div className="row mt-5 gal-row">
                <div className="col-12 col-md-3">
                    <div className='approachCard'>
                        <img src={icon1} alt="We Envision" />
                        <h4 className='mt-4'>We Envision</h4>
                        <p className='mt-3'>Our process begins with understanding your vision and style to craft designs that reflect your personality.</p>
                    </div>
                </div>
                <div className="col-12 col-md-3">
                    <div className='approachCard'>
                        <img src={icon2} alt="We Design" />
                        <h4 className='mt-4'>We Design</h4>
                        <p className='mt-3'>With creativity and precision, we design unique wallpapers and décor solutions that enhance your space.</p>
                    </div>
                </div>
                <div className="col-12 col-md-3">
                    <div className='approachCard'>
                        <img src={icon3} alt="We Curate" />
                        <h4 className='mt-4'>We Curate</h4>
                        <p className='mt-3'>Our curated collection features premium wallpapers and décor pieces, handpicked to suit diverse tastes.</p>
                    </div>
                </div>
                <div className="col-12 col-md-3">
                    <div className='approachCard'>
                        <img src={icon4} alt="We Transform" />
                        <h4 className='mt-4'>We Transform</h4>
                        <p className='mt-3'>From concept to execution, we bring your vision to life, transforming walls into works of art.</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Approach;
