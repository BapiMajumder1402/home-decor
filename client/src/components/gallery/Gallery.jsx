import React from 'react';
import IntroSection from '../introSection/IntroSection';
import img1 from './img1.jpg';
import img2 from './img2.jpg';
import img3 from './img3.jpg';
import img4 from './img4.jpg';
import './gallery.css';

const Gallery = () => {
  return (
    <section style={{ background: "#F5FAFF" }}>
      <IntroSection
        small={"Discover the Art of Living"}
        bold={"Stunning "}
        light={"Home Decor Collections"}
      />
      <div className="row mt-5 gal-row">
        <div className="col-12 col-md-6">
          <div className="card-container">
            <img src={img1} alt="Premium Wallpapers" className="card-image" />
            <div className="card-overlay">
              <div className="card-header d-flex justify-content-between align-items-center">
                <h4>Premium Wallpapers</h4>
              </div>
              <div className="card-description">
                <p>
                  Elevate your living spaces with our high-quality, elegant wallpaper designs tailored to your taste.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-12 col-md-6">
          <div className="card-container">
            <img src={img2} alt="Luxury Wallpapers" className="card-image" />
            <div className="card-overlay">
              <div className="card-header d-flex justify-content-between align-items-center">
                <h4>Luxury Wallpapers</h4>
              </div>
              <div className="card-description">
                <p>
                  Discover exquisite textures and patterns that bring sophistication and charm to any interior.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-12 col-md-6">
          <div className="card-container mt-4">
            <img src={img3} alt="Home Accessories" className="card-image" />
            <div className="card-overlay">
              <div className="card-header d-flex justify-content-between align-items-center">
                <h4>Home Accessories</h4>
              </div>
              <div className="card-description">
                <p>
                  Enhance your home decor with our unique range of accessories collections designed for modern living.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-12 col-md-6">
          <div className="card-container mt-4">
            <img src={img4} alt="Interior Design Solution" className="card-image" />
            <div className="card-overlay">
              <div className="card-header d-flex justify-content-between align-items-center">
                <h4>Interior Solution</h4>
              </div>
              <div className="card-description">
                <p>
                  Transform your home and business spaces with innovative design solutions crafted by our experts.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
