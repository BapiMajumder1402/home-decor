import React, { useEffect, useState } from 'react'
import '../../components/banner/banner.css'
import IntroSection from '../../components/introSection/IntroSection'
import contactBanner from '/pageBanner.jpg'
import Approach from '../../components/approach/Approach'
import { Helmet } from 'react-helmet-async'
import client from '../../../sanity/client'

const AboutUs = () => {

    const [data1, setData1] = useState(null);

    useEffect(() => {
        const cachedData = sessionStorage.getItem('aboutData');

        if (cachedData) {
            setData1(JSON.parse(cachedData));
        } else {
            client
                .fetch(
                    `*[_type == "about"]{
                  _id,
                  smallHeading,
                  boldHeading,
                  lightHeading,
                  aboutDescription,
                  aboutImage{
                      asset->{
                          _id,
                          url
                      }
                  },
              }`
                )
                .then((data) => {
                    const aboutData = data[0];
                    setData1(aboutData);
                    sessionStorage.setItem('aboutData', JSON.stringify(aboutData));
                })
                .catch(console.error);
        }
    }, []);
    return (
        <div>
            <div className="listBanner" style={{
                backgroundImage: `url(${contactBanner})`,
            }}>
                <div className="listBannerData">
                    <h1>About Us</h1>
                    <p>TRANSFORM YOUR SPACE
Explore Home Decor Elegance
with Premium Wall Wallpapers
</p>
                </div>

            </div>
            <section className="bannerBot">
                <div className="row gal-row">
                    <div className="col-12 col-md-5 d-flex align-items-center justify-content-start">
                        <img
                            src={data1?.aboutImage?.asset?.url}
                            alt="About us"
                            className="bannerBotImg"
                        />
                    </div>
                    <div className="col-12 col-md-7">
                        <div className="bannerRight">
                            <IntroSection
                                bold={data1?.boldHeading}
                                light={data1?.lightHeading}
                                small={data1?.smallHeading}
                            />
                            <p className="mt-3">{data1?.aboutDescription}</p>

                        </div>
                    </div>
                </div>
            </section>
            <Approach />
            <div className="about-img">
                <IntroSection bold={"Transforming Spaces With Elegant "} light={"Designs And Personalized Touch"} small={"DESIGN ADVANTAGE"} />
                <button className='mt-3'>Explore Our Collection</button>
            </div>
        </div>
    )
}

export default AboutUs
