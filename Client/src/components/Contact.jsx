import React from 'react'
import '../css/Contact.css'
import theme_pattern from '../assets/theme_pattern.svg'
import mail_icon from '../assets/mail_icon.svg'
import location_icon from '../assets/location_icon.svg'
import call_icon from '../assets/call_icon.svg'


const Contact = () => {
        const onSubmit = async (event) => {
          event.preventDefault();
          const formData = new FormData(event.target);
      
          formData.append("access_key","d8af8356-3e6a-405a-aea2-ef97c2929ff1");
      
          const object = Object.fromEntries(formData);
          const json = JSON.stringify(object);
      
          const res = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Accept: "application/json"
            },
            body: json
          }).then((res) => res.json());
      
          if (res.success) {
            console.log("Success", res);
            alert(res.message)
          }
        };


  return (
    <div id='contact' className='contact'>
        <div className="contact-title">
            <h1>Get in touch</h1>
            <img src={theme_pattern} alt="" />
        </div>
        <div className="contact-section">
            <div className="centact-left">
                <h1>Let's talk</h1>
                <p>send your details for add as student to download all the reference books</p>
                <div className="contact-details">
                    <div className="contact-detail">
                        <img src={mail_icon} alt="" /> <p>codecrushes@gmail.com</p>
                    </div>
                    <div className="contact-detail">
                        <img src={call_icon} alt="" /> <p>0757332727</p>
                    </div>
                    <div className="contact-detail">
                        <img src={location_icon} alt="" /> <p>Rajarata University of Sri Lanka</p>
                    </div>
                </div>
            </div>
            <form onSubmit={onSubmit} className="contact-right">
                <label htmlFor="">Your Name</label>
                <input type="text" name="name" id="" placeholder='Ender Your Name'/>
                <label htmlFor="">Your Stream</label>
                <input type="text" name="Stream" id="" placeholder='Ender Your Stream'/>
                <label htmlFor="">Your Email</label>
                <input type="email" name="email" id="" placeholder='Ender Your Email'/>
                <label htmlFor="">Write Your Message Here</label>
                <textarea name="message" rows="8" placeholder='Ender Your Message'></textarea>
                <button type='submit'className='contact-submit'>Sumbit Now</button>
            </form>
        </div>
    </div>
  )
}

export default Contact