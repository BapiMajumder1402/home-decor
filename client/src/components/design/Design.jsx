import React from 'react';
import IntroSection from '../introSection/IntroSection';
import tick from '/tick.svg';

const Design = () => {
    return (
        <section style={{ background: "#F5FAFF" }} className='design'>
            <IntroSection small={"Design & Craftsmanship"} bold={"Our Design "} light={"Philosophy & Approach"} />
            <div className="row mt-5" style={{ background: "#fff" }}>
                <div className="col-12 col-md-7">
                    <ul>
                        <li><span><img src={tick} alt="" /></span>Customized wallpaper designs tailored to individual styles.</li>
                        <li><span><img src={tick} alt="" /></span>Integration of modern and timeless aesthetics for lasting appeal.</li>
                        <li><span><img src={tick} alt="" /></span>High-quality materials ensuring durability and elegance.</li>
                        <li><span><img src={tick} alt="" /></span>Attention to intricate details and perfect finishing.</li>
                        <li><span><img src={tick} alt="" /></span>Eco-friendly and sustainable design options available.</li>
                        <li><span><img src={tick} alt="" /></span>Expert guidance to transform spaces into personalized masterpieces.</li>
                    </ul>
                </div>
                <div className="col-12 col-md-5 designImg">
                    {/* Add an image or illustration of your design philosophy or a beautiful interior space */}
                </div>
            </div>
        </section>
    );
};

export default Design;
