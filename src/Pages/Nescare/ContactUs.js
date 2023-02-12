import React from 'react';
import Header from '../../Partials/Header';
import {useNavigate} from "react-router-dom"
import ContactForm from '../../Partials/ContactForm';

export default function ContactUs() {
    const naviagte= useNavigate();
    const handleBack = () =>  {
        naviagte(-1);
    }

  return (
    <>
    <Header showNav={false} ContactNav={true}/>

   
    <section className='contactBg' style={{ background: "#10243E", height: "108vh" }}>
        <div className="container">
                <div className="row">
                    <div className="col-lg-6 d-flex flex-column justify-content-center">
                        <div className="contactus">
                            <div className="contactus-content">
                                <div className="contact-back mb-4" onClick={handleBack}>
                                    <h3><img src='/images/contact_us/back-arrow.svg'/>Go back</h3>
                                </div>
                                <div className="contact-head mb-5" style={{paddingRight: "6rem"}}>
                                    <h1>Connect Us</h1>
                                </div>
                                <div className="contact-paragraph">
                                    <p>Namaste and Welcome to your gateway to digital freight forwarding in India. The team from NES Global specializes in transporting shipments multi-modally across Sea, Air, Rail and Road shipments.</p>
                                </div>
                            </div>
                            <div className="contact-image mt-5">
                                <img src='/images/contact_us/contact.png' alt='' width={384} height={295} />
                            </div>
                        </div>
                    </div>
   
                    <div className="col-lg-6">
                      <ContactForm/>
                    </div>
                </div>
            
        </div>
    </section>

    {/* <section style={{ background: "#10243E" }}>
        <div className="container">
            <div className="top-section" style={{paddingTop: "90px", height: "690px"}}>
                <div className="row">
                    <div className="col-lg-4">
                        <div className="contactus">
                            <div className="contact-head mb-5">
                                <h3>Contact Us</h3>
                            </div>
                            <div className="address-head">
                                <h4 style={{color: "#403F3E"}}>Our Address</h4>
                            </div>
                            <div className="address">
                                <p>Nes Global Solutions Pvt Ltd. <br/>
                                    HD 036, We Work, Two Horizon center, 5th floor, DLF phase 5, sector 43 Golf Course Road, Gurgaon, Haryana HD 122002</p>
                            </div>
                            <div className="connect mt-5 mb-4">
                                <h5>Connect With Us</h5>
                            </div>
                            <div className="team-social-links d-flex">
                                <i class="fab fa-facebook-f"></i>
                                <i class="fab fa-twitter"></i>
                                <i class="fab fa-instagram"></i>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-8">
                        <div className="contactus">
                            <div className="row">
                                <div className="col-lg-6 d-flex flex-column">
                                    <label for="firstname" className='mb-2'>First Name</label>
                                    <input type="text" placeholder='Enter your first name' />
                                </div>
                                <div className="col-lg-6 d-flex flex-column">
                                    <label for="emailaddress" className='mb-2'>Email Address</label>
                                    <input type="email" placeholder='Enter your email address' />
                                </div>

                                <div className="mb-4"></div>

                                <div className="col-lg-6 d-flex flex-column">
                                    <label for="mobilenumber" className='mb-2'>Mobile Number</label>
                                    <input type="tel" placeholder='Enter Mobile Number' />
                                </div>
                                <div className="col-lg-6 d-flex flex-column">
                                    <label for="company" className='mb-2'>Company</label>
                                    <input type="text" placeholder='Enter Company Name' />
                                </div>

                                <div className="mb-4"></div>

                                <div className="col-lg-12 d-flex flex-column">
                                    <label for="message" className='mb-2'>Message</label>
                                    <textarea placeholder='Enter Your Message' />
                                </div>

                                <div className="send-btn mt-4">
                                    <button type='submit'>Send Message</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section> */}
    </>
  )
}