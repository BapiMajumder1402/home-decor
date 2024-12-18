import React from 'react'
import line from '/line.svg'
import s1 from '/s1.png';
import s2 from '/s2.png';
import s3 from '/s3.png';
import s4 from '/s4.png';
import s5 from '/s5.png';
import s6 from '/s6.png';
import s7 from '/s7.png';
import s8 from '/s8.png';
import s9 from '/s9.png';
import s10 from '/s10.png';
import s11 from '/s11.png';
import s12 from '/s12.png';
import s13 from '/s13.png';
import s14 from '/s14.png';
import botArr from '/upArr.png';

const arr = [
    { txt: "Fire Hydrant & Sprinklers", img: s1 },
    { txt: "Identity & Access Management", img: s2 },
    { txt: "Public Address Systems", img: s3 },
    { txt: "Video Surveillance Systems", img: s4 },
    { txt: "Perimeter Intrusion & Gate Access", img: s5 },
    { txt: "Fire Alarm Control Panel", img: s6 },
    { txt: "Parking & Visitor Management", img: s7 },
    { txt: "Building Management Solution", img: s8 },
    { txt: "Home and Office Automation", img: s9 },
    { txt: "Utility Management Solution", img: s10 },
    { txt: "IT Networking", img: s11 },
    { txt: "BIM", img: s12 },
    { txt: "Smart Analytics", img: s13 },
    { txt: "IoT Solutions", img: s14 }
];


const Services = () => {
    return (
        <section>
            <div className='titleDiv'>
                <h2>Services</h2>
                <img src={line} alt="" />
            </div>
            <div className="serviceCardContainer">
            {arr.map((e)=>(
                <div key={e.txt} className='serviceCard'>
                    <div className='serviceImg'><img src={e.img} alt="" /></div>
                    <h4 className='ServiceText'>{e.txt}</h4>
                    <div className='d-flex justify-content-end'><img src={botArr} alt="" /></div>
                </div>
            ))}
            </div>
        </section>
    )
}

export default Services
