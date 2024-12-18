import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import client from '../../../sanity/client';
import line from '/line.svg';
import { Helmet } from 'react-helmet-async';
import Wp from '../utils/Wp';

const HomeAccessories = () => {
    const [services, setServices] = useState([]);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

    useEffect(() => {
        const cachedServices = sessionStorage.getItem('accessories');
        if (cachedServices) {
            setServices(JSON.parse(cachedServices));
            setLoading(false);
        } else {
            client
                .fetch(
                    `*[_type == "accessories"]{
                        _id,
                        name,
                        description,
                        stock,
                        price,
                        productImages[] {
                            asset-> {
                                _id,
                                url
                            }
                        }
                    }`
                )
                .then((fetchedData) => {
                    setServices(fetchedData);
                    sessionStorage.setItem('accessories', JSON.stringify(fetchedData));
                })
                .catch(console.error)
                .finally(() => setLoading(false));
        }
    }, []);

    if (loading) {
        return <div className="text-center my-5">Loading...</div>;
    }

    return (
        <>
            <Helmet>
                <title>Home Accessories</title>
                <meta
                    name="description"
                    content="Transform your space with premium home decor and wall accessories."
                />
            </Helmet>

            <div className="listBanner ">
                <div className="listBannerData">
                    <h1>Home Decor</h1>
                    <p >
                        Transform Your Space <br />
                        Explore Home Decor Elegance with Premium Wall Accessories
                    </p>
                </div>
            </div>

            <section >
                <div className="pages-head text-center mb-4">
                    <h1>Home Accessories</h1>
                    <img src={line} alt="Section divider" />
                </div>

                <div >
                    {services.map((service) => (
                        <div
                            key={service._id}
                              className="listCard"
                        >
                            <div className="listImg">
                                {service?.productImages?.[0]?.asset?.url && (
                                    <img
                                        src={service.productImages[0].asset.url}
                                        alt={service.name}
                                        className="design-and-operation-image"
                                    />
                                )}
                            </div>
                                <div className="listBot">
                                    <h2>{service?.name}</h2>
                                    <p >{service?.description}</p>
                                    <p>Stock : {service?.stock}</p>
                                    <div className="d-flex justify-content-between">
                                        <button onClick={() => navigate(`/homeAccessories/${service._id}`)}>
                                            READ MORE
                                        </button>
                                        <Wp />
                                    </div>
                                </div>
                        </div>
                    ))}
                </div>
            </section>
        </>
    );
};

export default HomeAccessories;
