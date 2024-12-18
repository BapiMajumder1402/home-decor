import React, { useEffect, useState } from 'react';
import './banner.css';
import bannerVideo from '/nexus.mp4';
import client from '../../../sanity/client';
import IntroSection from '../introSection/IntroSection';
import { useNavigate } from 'react-router-dom';

const Banner = () => {
  const [data, setData] = useState(null);
  const navigate = useNavigate()
  useEffect(() => {
    const cachedData = sessionStorage.getItem('aboutData');

    if (cachedData) {
      setData(JSON.parse(cachedData));
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
          setData(aboutData);
          sessionStorage.setItem('aboutData', JSON.stringify(aboutData));
        })
        .catch(console.error);
    }
  }, []);

  return (
    <>
      <div className="bannerImg">

        <div className="bannerTxt">
          <h3>Transform Your Living Spaces With</h3>
          <h2>Elegant Home Decor Solutions</h2>
          <p>
            Welcome to Luxe Living, where design meets comfort. Discover a world of exquisite decor options crafted to bring beauty, functionality, and a personal touch to every corner of your home.
          </p>
          <button onClick={()=>{navigate('/luxuryWallpaper')}}>Explore Our Collection</button>
        </div>

      </div>
      <section className="bannerBot">
        <div className="row">
          <div className="col-12 col-md-5 d-flex align-items-center justify-content-start">
            <img
              src={data?.aboutImage?.asset?.url}
              alt="About us"
              className="bannerBotImg"
            />
          </div>
          <div className="col-12 col-md-7">
            <div className="bannerRight mt">
              <IntroSection
                bold={data?.boldHeading}
                light={data?.lightHeading}
                small={data?.smallHeading}
              />
              <p className="mt-3">{data?.aboutDescription}</p>
              {/* <button className="mt-4">Read More</button> */}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Banner;
