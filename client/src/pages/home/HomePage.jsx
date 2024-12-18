import React, { useEffect, useState } from 'react'
import Banner from '../../components/banner/Banner'
import Gallery from '../../components/gallery/Gallery'
import Approach from '../../components/approach/Approach'
import Design from '../../components/design/Design'
import './Home.css'
import Success from '../../components/success/Success'
import Contact from '../../components/contact/Contact'
import { Helmet } from 'react-helmet-async'
import client from '../../../sanity/client'

const HomePage = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await client.fetch(
          `*[_type == "home"]{
                _id,
                seoTitle,
                seoDescription
            }`
        );
        setData(response[0]);
      } catch (error) {
        console.error('Error fetching about data:', error);
      }
    };

    fetchData();
  }, []);
  return (
    <div>
      {data && 
      <Helmet>
        <title>{data?.seoTitle || 'HOME DECOR'}</title>
        <meta name="description" content={data?.seoDescription || 'Nexus'} />
      </Helmet>
      }
      <Banner />
      <Gallery />
      <Approach />
      <Design />
      <Success />
      <Contact />
    </div>
  )
}

export default HomePage
