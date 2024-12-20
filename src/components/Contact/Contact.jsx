import { React, useRef} from 'react';
import './Contact.css'
import contact from '../../assets/contact.jpg';
import emailjs from '@emailjs/browser';

const Contact = () => {

    const form = useRef();

    const handleSubmit = (e) => {
        e.preventDefault();
        emailjs
      .sendForm('service_k42f5rs', 'template_lkm1me1', form.current, 'nr04lxYyFvKFa0e5M')
      .then(
        () => {
            alert('Message Sent');
          console.log('SUCCESS!');
        },
        (error) => {
            alert('Error Occured');
          console.log('FAILED...', error.text);
        },
      );
      };

    return (
        <div id="contact" className='ContactContainer'>
            <div className='contactWrapper'>
                <div className='contactTitle'>
                    Contact
                </div>
                <div className='innerContainerContact'>
                    <div className='left'>
                        <form ref={form} onSubmit={handleSubmit}>
                            <div className='input'>
                                <input
                                    className="inputEdit"
                                    type='text'
                                    name='your_name'
                                    placeholder="Your Name"
                                    required
                                />
                            </div>
                            <div className='input'>
                                <input
                                    className="inputEdit"
                                    type='email'
                                    name='your_email'
                                    placeholder="Your Email"
                                    required
                                />
                            </div>
                            <div className='input'>
                                <textarea
                                    className="textAreaEdit"
                                    cols='30'
                                    rows='5'
                                    name='message'
                                    placeholder="Your Message"
                                    required
                                />
                            </div>
                            <div className='msgButton'>
                                <button type="submit" className='msg'>
                                    SEND MESSAGE
                                </button>
                            </div>
                        </form>
                    </div>

                    <div className='right'>
                    <div className='box'>
                            <div>
                                <img className='contactImage' src={contact} alt='Contact' />
                            </div>
                            <div className='details'>
                                <h1>Bhumika Vasanta</h1>
                                <p>Phone: +91 6263377897</p>
                                <p>Email: bhumikavasanta2000@gmail.com</p> <br />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};



export default Contact;
