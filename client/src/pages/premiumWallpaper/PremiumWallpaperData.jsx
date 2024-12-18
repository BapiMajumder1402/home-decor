import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import client from '../../../sanity/client';
import { Carousel } from 'react-bootstrap'; // Bootstrap carousel
import Loading from '../utils/Loading';

const PremiumWallpaperData = () => {
    const { id } = useParams();
    const [item, setItem] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        client
            .fetch(
                `*[_type == "premium" && _id == $id]{
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
                }`,
                { id }
            )
            .then((data) => {
                setItem(data[0]);
            })
            .catch(console.error)
            .finally(() => {
                setLoading(false);
            });
    }, [id]);

    if (loading) {
        return <Loading />;
    }

    if (!item) {
        return <div className="text-center">Item not found!</div>;
    }

    return (
        <div className="container details-page">
            <div className="row">
                {/* Left: Carousel */}
                <div className="col-md-6 d-flex align-items-center">
                    {item?.productImages?.length > 0 && (
                        <Carousel className="w-100" interval={3000}>
                            {item.productImages.map((image, index) => (
                                <Carousel.Item key={index}>
                                    <img
                                        src={image.asset.url}
                                        alt={`Product Image ${index + 1}`}
                                        className="d-block w-100 img-fluid"
                                        style={{ height: '400px', objectFit: 'cover' }}
                                    />
                                </Carousel.Item>
                            ))}
                        </Carousel>
                    )}
                </div>

                {/* Right: Details */}
                <div className="col-md-6 details-right">
                    <h2 className="mb-3 pt">{item.name}</h2>
                    <p className="mb-4">{item.description}</p>
                    <p className="mb-2">
                        <strong>Price:</strong> {item.price}
                    </p>
                    <p>
                        <strong>Stock:</strong> {item.stock}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default PremiumWallpaperData;
