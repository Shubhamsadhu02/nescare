import React from 'react'

import Copyright from '../../Partials/Copyright'

import Header from '../../Partials/Header'

export default function ExcessInventory() {
  return (
    <>
    <Header showNav={false} ContactNav={true} />

<section  style={{background: "#10243E"}}>
    <div className="container" style={{paddingTop: "7rem"}}>
        <div className="nescare-top pt-5">
            <div className="row">
                <div className="col-lg-6 d-flex flex-column justify-content-center">
                    <div className="nescare-top__section">
                        <div className="nescare-heading">
                            <h1 data-aos="fade-up" data-aos-offset="-2" data-aos-duration="60" data-aos-easing="linear">Every Dollar Counts</h1>
                        </div>
                        <div className="nescare-paragraph mt-3">
                            <p data-aos="fade-up" data-aos-offset="-2" data-aos-duration="40" data-aos-easing="linear">While many donors support full cargo moves, we can direct any amount towards a shipment targeted for good. Your donation can both empower organizations to respond as quickly as possible and provide sustained support after the disaster to enable successful recovery.</p>
                        </div>
                        <div className="donate-btn mt-5">
                            <button type='submit'>Donate Now</button>
                        </div>
                    </div>
                </div>
                <div className="col-lg-6 mt-5">
                    <img src='../images/nescare/excessinventoryhome.png' />
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
                        <img src='../images/nescare/nutrition.png' />
                    </div>
                    <div className="col-lg-6 d-flex flex-column justify-content-center">
                        <div className="nescare-container">
                            <div className="nescare-heading">
                                <h1 data-aos="fade-up" data-aos-anchor-placement="bottom-bottom" data-aos-duration="600" data-aos-easing="linear" style={{color: "#403F3E"}}>Bring Essential <span style={{color: "#24C6AF"}}>Nutrition</span> to Families in India</h1>
                            </div>
                            <div className="nescare-paragraph mt-3">
                                <p data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-duration="70" data-aos-easing="linear" style={{color: "#737171"}}>NESglobal.in teams are working with partners to help lesser privileged individuals and families in India to receive food from disrupted supply chains. Instead of going to waste, quality food ends up on tables.</p>
                            </div>
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
