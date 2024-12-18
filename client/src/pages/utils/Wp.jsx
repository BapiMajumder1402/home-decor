import React from 'react';
import wtsappLogo from '/wp.png';

const Wp = () => {
    const redirectToWhatsApp = () => {
        const phoneNumber = '+919620658403';
        const message = 'Hello, I would like to inquire about wallpaper'; 
        const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
        window.open(whatsappURL, '_blank');
    };

    return (
        <button className="wp" onClick={redirectToWhatsApp}>
            <img src={wtsappLogo} alt="WhatsApp" />
        </button>
    );
};

export default Wp;
