import React from 'react'
import Contact from '../../components/contact/Contact'
import contactBanner from '/pageBanner.jpg'
const ContactUs = () => {
    return (
        <div className='contactPage'>
            <div className="listBanner" style={{
                backgroundImage: `url(${contactBanner})`,
            }}>
                <div className="listBannerData">
                    <h1>Contact</h1>
                    <p>TRANSFORM YOUR SPACE
Explore Home Decor Elegance
with Premium Wall Wallpapers
</p>
                </div>
            </div>
            <Contact />
        </div>
    )
}

export default ContactUs
