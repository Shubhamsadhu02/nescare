import React from 'react'
import Copyright from '../../Partials/Copyright'

import Header from '../../Partials/Header'

export default function nescare() {
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
                                <h1>Delivering the <br/><span style={{color: "#24C6AF"}}>Good'NES</span> to Humanity</h1>
                            </div>
                            <div className="nescare-paragraph mt-3">
                                <p>NES Global aims at enabling organizations to deliver the global aid and impact to meet their sustainability goals with ease and in an economically efficient way.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <img src='../images/nescare/nescarehome.png' />
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
                        <img src='../images/nescare/good.png' />
                    </div>
                    <div className="col-lg-6 d-flex flex-column justify-content-center">
                        <div className="nescare-container">
                            <div className="nescare-heading">
                                <h1 style={{color: "#403F3E"}}>An Easier Way To <span style={{color: "#24C6AF"}}>Do Good</span></h1>
                            </div>
                            <div className="nescare-paragraph mt-3">
                                <p style={{color: "#737171"}}>With NES you can use our platform for global logistics to deliver aid in a crisis, donate unused goods, and limit carbon emissions—all with more clarity and accountability at every step.</p>
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
                            <img src='../images/nescare/waystag1.png'/>
                        </div>
                        <div className="ways-topic mt-5">
                            <h3>Reach Carbon Neutrality</h3>
                        </div>
                        <div className="ways-paragraph mt-4">
                            <p>Calculate and offset 100%
                                of your CO₂ emissions, meet environmental and social responsibility goals, and enhance supply chain sustainability.</p>
                        </div>
                        <div className="ways-learn-more mt-4">
                            <a href='/reach-carbon' style={{color: "#24C6AF"}}>Learn More<i class="far fa-angle-right"></i></a>
                        </div>
                    </div>
                    <div className="col-lg-3">
                        <div className="ways-tag">
                            <img src='../images/nescare/waystag2.png'/>
                        </div>
                        <div className="ways-topic mt-5">
                            <h3>Get Discounted and Pro Bono Services</h3>
                        </div>
                        <div className="ways-paragraph mt-4">
                            <p>We offer significant discounts on international shipping services to NGOs and nonprofits, plus dedicated support for greater shipping efficiency.</p>
                        </div>
                        <div className="ways-learn-more mt-4">
                            <a href='/services' style={{color: "#24C6AF"}}>Learn More<i class="far fa-angle-right"></i></a>
                        </div>
                    </div>
                    <div className="col-lg-3">
                        <div className="ways-tag">
                            <img src='../images/nescare/waystag3.png'/>
                        </div>
                        <div className="ways-topic mt-5">
                            <h3>Donate Excess Inventory</h3>
                        </div>
                        <div className="ways-paragraph mt-4">
                            <p>Your products don&apos;t have to go to waste. Whether it&apos;s a one-time shipment or ongoing donations, NESglobal.in enables discounted freight services for donated products.</p>
                        </div>
                        <div className="ways-learn-more mt-4">
                            <a href='/inventory' style={{color: "#24C6AF"}}>Learn More<i class="far fa-angle-right"></i></a>
                        </div>
                    </div>
                    <div className="col-lg-3">
                        <div className="ways-tag">
                            <img src='../images/nescare/waystag4.png'/>
                        </div>
                        <div className="ways-topic mt-5">
                            <h3>Change the Trajectory of Any Crisis</h3>
                        </div>
                        <div className="ways-paragraph mt-4">
                            <p>Donate to the NESglobal.in Fund to help cover the cost of aid shipments. With your help, we can increase the impact of aid globally.</p>
                        </div>
                        <div className="ways-learn-more mt-4">
                            <a href='excess-inventory' style={{color: "#24C6AF"}}>Learn More<i class="far fa-angle-right"></i></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <Copyright/>
    </>
  )
}
