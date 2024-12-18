import React from 'react'
import './footer.css'
import { Link } from 'react-router-dom';
import email from '/email.svg';
import phone from '/phone.svg';
import fb from '/fb.svg';
import insta from '/insta.svg';
import youtube from '/youtube.svg';
import Wp from '../../pages/utils/Wp';

const Footer = () => {
    const redirectToWhatsApp = () => {
        const phoneNumber = '+919620658403';
        const message = 'Hello, I would like to inquire about wallpaper'; 
        const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
        window.open(whatsappURL, '_blank');
    };

    return (<>
        <section>
            <div className="contactBot">
                <h5 className='text-center'>HOME DECOR</h5>
                <h2 className='text-center mt-2'>Let Us Help To Design Your Dream!</h2>
                <div className="text-center">
                    <button className='mt-4' onClick={redirectToWhatsApp}>CONTACT US</button>
                </div>
            </div>
        </section>

        <footer >
            <div className="row">
                <div className="col-12 col-md-3">
                    <h5>Menu</h5>
                    <div className='footer-links'>
                        <Link>HOME</Link>
                        <Link>ABOUT US</Link>
                        <Link>OUR APPROACH</Link>
                        <Link>DESIGN & OPERATION</Link>
                        <Link>SERVICES</Link>
                        
                    </div>
                </div>
                <div className="col-12 col-md-3">
                    <h5 className='pt'>Address</h5>
                    <div>
                        <div>
                            <h6>Home Decor</h6>
                            <p className='mt-2' style={{ width: "70%" }}>Opposite of LIC office ,
                            Paradise Chowmuhani ,
                            Hospital Road Extension ,
                            Agartala, Tripura (W)</p>
                        </div>
                        <div className='contact-data mt-4'>
                        <p className='mb-1'>
                            <img src={phone} alt="Phone Icon"    />
                            <a href="tel:+917005591733" >+91 - 70055 91733</a>
                        </p>
                            <p>
                            <img src={email} alt="Email Icon" />
                            <a href="mailto:homedecoreagartala@gmail.com" >homedecoreagartala@gmail.com</a>
                        </p>
                        </div>
                        <div className='social'>
                            <Link><img src={fb} alt="" /></Link>
                            <Link><img src={insta} alt="" /></Link>
                            <Link><img src={youtube} alt="" /></Link>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-md-3">
                    <h5 className='pt'>Get In Touch Directly</h5>
                    <div className='d-flex align-items-center gap-2'>
                        <p style={{margin:"0",width:"max-content"}}>Whatsapp Us For More</p>
                        <Wp/>
                    </div>
                </div>
            </div>
            <div className="footerBot">
                <p className='text-center'>COPYRIGHT 2024 HOME DECOR. ALL RIGHTS RESERVED.</p>
            </div>
        </footer>
    </>
    )
}

export default Footer
