import React, { useEffect, useState } from 'react';
import contactBanner from '/pageBanner.jpg';
import IntroSection from '../../components/introSection/IntroSection';
import tick from '/tick.svg';
import client from '../../../sanity/client';
import { Helmet } from 'react-helmet-async';

const OurApproach = () => {
    const [data, setData] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await client.fetch(
                    `*[_type == "work"]{
                        _id,
                        name,
                        review,
                        workImage{
                            asset->{
                                url
                            }
                        }
                    }`
                );
                setData(response);
            } catch (error) {
                console.error('Error fetching work data:', error);
            }
        };

        fetchData();
    }, []);

    return (
        <div className='design'>
            {data && (
                <Helmet>
                    <title>{data?.seoTitle || 'Home Décor Experts'}</title>
                    <meta name="description" content={data?.seoDescription || 'Discover exquisite home décor and wallpaper solutions tailored to your style.'} />
                </Helmet>
            )}
            <div
                className="listBanner"
                style={{
                    backgroundImage: `url(${contactBanner})`,
                }}
            >
                <div className="listBannerData">
                    <h1>Our Approach</h1>
                    <p>Transforming your living spaces with exquisite designs and premium wallpapers that reflect your style and personality.</p>
                </div>
            </div>
            <section>
                <div className="row gal-row">
                    <div className="col-12 col-md-7">
                        <IntroSection bold={"At Home Décor Experts"} light={"we bring creativity and craftsmanship to every project"} small={"OUR APPROACH"} />
                        <ul>
                            <li><span><img src={tick} alt="" /></span>Think: We collaborate to understand your vision and design preferences.</li>
                            <li><span><img src={tick} alt="" /></span>Create: Crafting bespoke designs that elevate your space’s aesthetic.</li>
                            <li><span><img src={tick} alt="" /></span>Integrate: Perfectly blending modern and timeless styles for a cohesive look.</li>
                            <li><span><img src={tick} alt="" /></span>Deliver: Transformative results with attention to every detail.</li>
                        </ul>
                    </div>
                    <div className="col-5 approachImg">
                        {/* Add an image or gallery of your home décor projects */}
                    </div>
                </div>
            </section>
            <section>
                <div className='row gal-row'>
                    {data?.map((e, i) => (
                        <div className='col-12 col-md-4' key={i}>
                            <div className="reviewBox">
                                <div className="review-image">
                            {e.workImage?.asset?.url && (
                                <img src={e.workImage.asset.url} alt={e.name} className="work-image" />
                            )}
                                </div>
                                <div className="reviewBot">
                            <p>{e.review}</p>
                            <i className='right-text'>~~ {e.name}</i>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

        </div>
    );
};

export default OurApproach;
