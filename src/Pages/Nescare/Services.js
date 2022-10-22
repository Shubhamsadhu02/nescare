import React from 'react'

import Copyright from '../../Partials/Copyright'

import Header from '../../Partials/Header'

export default function Services() {
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
                            <h1>The Logistics of Aid Are Different. So Are Our Experts.</h1>
                        </div>
                        <div className="nescare-paragraph mt-3">
                            <p>Not everyone knows the differences between humanitarian, international development, and donation shipments, or the intricacies of moving each. But our experts do. They’re ready to shoulder your logistics burdens, leaving you more time (and budget) for your mission.</p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-6 mt-5">
                    <img src='../images/nescare/serviceshome.png' />
                </div>
            </div>
        </div>
    </div>
</section>
<Copyright/>
    </>
  )
}
