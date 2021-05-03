import React from 'react'
import ContactItem from '../Components/ContactItem';
import phone from '../img/phone.svg';
import email from '../img/emailme.svg';
import location from '../img/location.svg';
import Tittle from '../Components/Tittle';

function ContactPage() {
    return (
        <div>
            <div className="title">
                <Tittle title={'About Me'} span={'About Me'} />
            </div>
            <div className="ContactPage">
                <div className="map-sect">
                    <iframe src="https://www.google.com/maps/d/u/0/edit?mid=1WWHZNDbWklvo6uKvXvAtLZDEAprEwoTT&usp=sharing" width="600" height="450" frameBorder="0" style={{border:0}} allowFullScreen="" aria-hidden="false" tabIndex="0"></iframe>
                </div>
                <div className="contact-sect">
                    <ContactItem icon={phone} text1={'+8801683952127'} text2={'+8801644623745'} title={'Phone'}/>
                    <ContactItem icon={email} text1={'mehedi.rifat@northsouth.edu'} title={'Email'}/>
                    <ContactItem icon={location} text1={'Bashundhara residential area'} text2={'Bangladesh'} title={'Address'}/>
                </div>
            </div>
        </div>
    )
}

export default ContactPage;
