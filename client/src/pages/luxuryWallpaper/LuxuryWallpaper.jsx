import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import client from '../../../sanity/client';
import line from '/line.svg';
import Loading from '../utils/Loading';
import { Helmet } from 'react-helmet-async';
import Wp from '../utils/Wp';

const DesignAndOperation = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

    useEffect(() => {
        const cachedData = sessionStorage.getItem('luxury');

        if (cachedData) {
            setData(JSON.parse(cachedData));
            setLoading(false);
        } else {
            client
                .fetch(
                    `*[_type == "luxury"]{
                        _id,
                        name,
                        description,
                        stock,
                        price,
                        productImages[]{
                            asset->{
                                _id,
                                url
                            }
                        }
                    }`
                )
                .then((fetchedData) => {
                    setData(fetchedData);
                    sessionStorage.setItem('luxury', JSON.stringify(fetchedData));
                })
                .catch(console.error)
                .finally(() => {
                    setLoading(false);
                });
        }
    }, []);

    return (
        <>
            <Helmet>
                <title>Luxury Wallpapers</title>
                <meta name="description" content="Explore our collection of premium wall wallpapers to transform your space with elegance and style." />
            </Helmet>

            <div className="listBanner">
                <div className="listBannerData">
                    <h1>HOME DECOR</h1>
                    <p>TRANSFORM YOUR SPACE
                        Explore Home Decor Elegance
                        with Premium Wall Wallpapers</p>
                </div>
            </div>

            <section>
                <div className="pages-head">
                    <h1>Luxury Wallpapers</h1>
                    <img src={line} alt="" />
                </div>
                <div className="listData row">
                    {loading ? (
                        <Loading />
                    ) : (
                        data.map((item) => (
                            <div
                                key={item._id}
                                className="listCard"
                            >
                                <div className="listImg">
                                    {item.productImages?.length > 0 && (
                                        <img
                                            src={item.productImages[0]?.asset?.url}
                                            alt={item.name}
                                            className="design-and-operation-image"
                                        />
                                    )}
                                </div>
                                <div className="listBot">
                                    <h2>{item?.name}</h2>
                                    <p>{item?.description}</p>
                                    <p>Stock : {item?.stock}</p>
                                    <div className="d-flex justify-content-between">
                                        <button onClick={() => navigate(`/luxuryWallpaper/${item._id}`)}>
                                            READ MORE
                                        </button>
                                        <Wp />
                                    </div>

                                </div>
                            </div>
                        ))
                    )}
                </div>
            </section>
        </>
    );
};

export default DesignAndOperation;
