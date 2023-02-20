import React from 'react'
import { Link } from 'react-router-dom'
import Copyright from '../../Partials/Copyright'

import Header from '../../Partials/Header'

export default function Nescare() {
  return (
    <>
    <Header showNav={false} ContactNav={true} />

    <section  style={{background: "#10243E"}}>
        <div className="container">
            <div className="nescare-top pt-5">
                <div className="row">
                    <div className="col-lg-6 d-flex flex-column justify-content-center" >
                        <div className="nescare-top__section">
                            <div className="nescare-heading">
                                <h1 data-aos="fade-up" data-aos-duration="60" data-aos-easing="linear">Delivering the <br/><span style={{color: "#24C6AF"}}>Good'NES</span> to Humanity</h1>
                            </div>
                            <div className="nescare-paragraph mt-3">
                                <p data-aos="fade-up" data-aos-duration="40" data-aos-easing="linear">NES Global aims at enabling organizations to deliver the global aid and impact to meet their sustainability goals with ease and in an economically efficient way.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <img src='../images/nescare/nescarehome.png' alt='' />
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section>
        <div className="container">
            <div className="nescare-item mt-15">
                <div className="row">
                    <div className="col-lg-6">
                        <img src='../images/nescare/good.png' alt='' />
                    </div>
                    <div className="col-lg-6 d-flex flex-column justify-content-center">
                        <div className="nescare-container">
                            <div className="nescare-heading">
                                <h1 data-aos="fade-up" data-aos-offset="150" data-aos-easing="linear" style={{color: "#403F3E"}}>An Easier Way To <span style={{color: "#24C6AF"}}>Do Good</span></h1>
                            </div>
                            <div className="nescare-paragraph mt-3">
                                <p data-aos="fade-up" data-aos-easing="linear" style={{color: "#737171"}}>With NES you can use our platform for global logistics to deliver aid in a crisis, donate unused goods, and limit carbon emissions—all with more clarity and accountability at every step.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>


    <section style={{background: "#10243E"}}>
        <div className="container py-5 mt-15">
            <div className="ways">
                <div className="ways-heading">
                    <h1>Four Ways To Make a Difference</h1>
                </div>
                <div className="row" style={{rowGap: "60px", marginTop: "5rem"}}>
                    <div className="col-lg-3">
                        <div className="ways-tag">
                            <img src='../images/nescare/waystag1.png' alt=''/>
                        </div>
                        <div className="ways-topic mt-5">
                            <h3>Reach Carbon Neutrality</h3>
                        </div>
                        <div className="ways-paragraph mt-4">
                            <p>Calculate and offset 100%
                                of your CO₂ emissions, meet environmental and social responsibility goals, and enhance supply chain sustainability.</p>
                        </div>
                        <div className="ways-learn-more mt-4">
                            <Link to='/reach-carbon' style={{color: "#24C6AF"}}>Learn More<i class="far fa-angle-right"></i></Link>
                        </div>
                    </div>
                    <div className="col-lg-3">
                        <div className="ways-tag">
                            <img src='../images/nescare/waystag2.png' alt=''/>
                        </div>
                        <div className="ways-topic mt-5">
                            <h3>Get Discounted and Pro Bono Services</h3>
                        </div>
                        <div className="ways-paragraph mt-4">
                            <p>We offer significant discounts on international shipping services to NGOs and nonprofits, plus dedicated support for greater shipping efficiency.</p>
                        </div>
                        <div className="ways-learn-more mt-4">
                            <Link  to='/services' style={{color: "#24C6AF"}}>Learn More<i class="far fa-angle-right"></i></Link>
                        </div>
                    </div>
                    <div className="col-lg-3">
                        <div className="ways-tag">
                            <img src='../images/nescare/waystag3.png' alt=''/>
                        </div>
                        <div className="ways-topic mt-5">
                            <h3>Donate Excess Inventory</h3>
                        </div>
                        <div className="ways-paragraph mt-4">
                            <p>Your products don&apos;t have to go to waste. Whether it&apos;s a one-time shipment or ongoing donations, NESglobal.in enables discounted freight services for donated products.</p>
                        </div>
                        <div className="ways-learn-more mt-4">
                            <Link to='/inventory' style={{color: "#24C6AF"}}>Learn More<i class="far fa-angle-right"></i></Link>
                        </div>
                    </div>
                    <div className="col-lg-3">
                        <div className="ways-tag">
                            <img src='../images/nescare/waystag4.png' alt=''/>
                        </div>
                        <div className="ways-topic mt-5">
                            <h3>Change the Trajectory of Any Crisis</h3>
                        </div>
                        <div className="ways-paragraph mt-4">
                            <p>Donate to the NESglobal.in Fund to help cover the cost of aid shipments. With your help, we can increase the impact of aid globally.</p>
                        </div>
                        <div className="ways-learn-more mt-4">
                            <Link to='excess-inventory' style={{color: "#24C6AF"}}>Learn More<i class="far fa-angle-right"></i></Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section className='footprint__calculator'>
        <div className="container">
            <div className="row" style={{rowGap: "25px"}}>
                <div className="col-sm-12 col-md-6 col-lg-8">
                    <div className="calculator--heading">
                        <h2>Carbon Footprint Calculator</h2>
                    </div>
                    <div className="calculator--paragraph mt-3">
                        <p style={{color: "#737171", width: "603px"}}>Estimate an individual or organization's carbon footprint, which is the total amount of greenhouse gas emissions produced from their daily activities</p>
                    </div>
                    <div className="calculator--btn mt-3">
                        <Link to='/carboncalculator'><button type='submit' className='carbon-cal__btn' >Calculate Now</button></Link>
                    </div>
                </div>
                <div className="col-sm-12 col-md-6 col-lg-4">
                    <div className="calculator--img">
                        <img src='../images/nescare/footprint.png' alt='' />
                    </div>
                </div>
            </div>
        </div>
    </section>

    <Copyright/>
    </>
  )
}
