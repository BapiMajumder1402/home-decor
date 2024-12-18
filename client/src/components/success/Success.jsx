import React from 'react';
import line from '/line.svg';

const Success = () => {
  return (
    <div className='success'>
      <div>
        <h2>Designs that Define Our Success</h2>
        <img src={line} alt="" className='mt-2' />
        <p className='mt-4'>
          Explore our signature projects that showcase our expertise in transforming spaces with premium wallpapers and bespoke interior designs...
        </p>
      </div>
    </div>
  );
};

export default Success;
