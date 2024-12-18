import React from 'react'
import IntroSection from '../introSection/IntroSection'
import email from '/email.svg';
import phone from '/phone.svg';
import gear from '/gear.svg';
import user from '/user.svg';
import sms from '/sms.svg';
import contactBot from '/contactBot.png'
const Contact = () => {
    return (
        <section className='contact'>
            <div className="row gal-row">
                <div className="col-12 col-md-7">
                <IntroSection 
  small={"TRANSFORM YOUR SPACE"} 
  bold={"Explore Home Decor Elegance"} 
  light={"with Premium Wall Wallpapers"} 
/>

                    <div>
                        <h5>Home Decor</h5>
                        <p className='mt-2'>Opposite of LIC office ,
                            Paradise Chowmuhani ,
                            Hospital Road Extension ,
                            Agartala, Tripura (W)</p>
                    </div>
                    <div className='contact-data'>
                        <p className='mb-1'>
                            <img src={phone} alt="Phone Icon"    />
                            <a href="tel:+917005591733" style={{color:'#000'}}>+91 - 70055 91733</a>
                        </p>
                        <p>
                            <img src={email} alt="Email Icon" />
                            <a href="mailto:homedecoreagartala@gmail.com" style={{color:'#000'}}>homedecoreagartala@gmail.com</a>
                        </p>


                    </div>
                </div>
                <div className="col-12 col-md-5" style={{ background: "#F5FAFF" }}>
                    <h4 className='text-center'><i>Enquiry Form</i></h4>
                    <p className='text-center mt-2'>We will get back to you asap!</p>
                    <form className='mt-5' >
                        <div><img src={user} alt="" /><input type="text" placeholder='Enter Name' /></div>
                        <div><img src={phone} alt="" /><input type="text" placeholder='Enter Phone Number' /></div>
                        <div><img src={email} alt="" /><input type="text" placeholder='Enter Email' /></div>
                        <div>
                            <img src={gear} alt="" />
                            <select name="" id="">
                                <option value="">Select Service</option>
                            </select>
                        </div>
                        <div>
                            <img src={sms} alt="" height={26} />
                            <textarea name="" id="" placeholder='Message'></textarea>
                        </div>
                        <button style={{ width: "100%" }}>SEND</button>
                    </form>
                </div>

            </div>

        </section>
    )
}

export default Contact
