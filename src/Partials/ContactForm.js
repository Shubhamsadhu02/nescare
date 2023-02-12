import React, {useState} from 'react'
import { Link } from 'react-router-dom';

export default function ContactForm() {

    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = async (event) => {
    
        const formData = new FormData(event.target);
        for (var [key, value] of formData.entries()) {
            console.log(key, value);
        }
        setSubmitted(true);
        event.preventDefault();
        return;
    }


    return (
        <>
            <div className="enquiry-box d-flex flex-column justify-content-center align-items-center">
                <div className="success-message text-center" style={{zIndex:submitted?2:0, display:submitted?'block':'none'}}>
                    <span className='form-reset' onClick={() => setSubmitted(false)}>
                    <img className="mb-5" src="/images/contact_us/complete.svg" alt="" height="64px" width="64px" layout={"intrinsic"} /></span>
                    <h3>Submitted Successfully</h3>                    
                </div>

            <form method="post" action="/" onSubmit={handleSubmit} style={{zIndex:submitted?0:2, display:submitted?'none':'block'}}>
                <div className="row">
                    <div className="col-lg-6">
                        <label for="firstname">Name</label>
                        <input type="text" id="Name" name="name" placeholder="Name" required />
                    </div>
                    <div className="col-lg-6">
                        <label for="company">Company Name</label>
                        <input type="text" id="company" name="Company" placeholder="Company" required />
                    </div>

                    <div className="mb-4"></div>

                    <div className="col-lg-6">
                        <label for="companyMailId">Company Mail ID</label>
                        <input type="email" id="companyMailId" name="Company Mail ID" placeholder="Company Mail ID" required />
                    </div>
                    <div className="col-lg-6">
                        <label for="designation">Designation</label>
                        <input type="text" id="designation" name="Designation" placeholder="Designation" required />
                    </div>

                    <div className="mb-4"></div>

                    <div className="col-lg-6">
                        <label for="companyPhoneNo">Company Phone Number</label>
                        <input type="tel" id="companyPhoneNo" name="Company Phone Number" placeholder="+91" required />
                    </div>
                    <div className="col-lg-6">
                        <label for="noAirFreight">No. of Air Freight Shipments</label>
                        <input type="number" id="noAirFreight" name="No. of Air Freight Shipments" placeholder="##" required />
                    </div>

                    <div className="mb-4"></div>


                    <div className="col-lg-12 d-flex flex-column">
                        <label for="address">Company Postal Address</label>
                        <textarea type="text" id="address" name="address" placeholder='Enter Address' required />
                    </div>

                    <div className="send-btn mt-4">
                        <button type='submit'>Submit</button>
                    </div>

                    <div className="enquiry-terms mt-3">
                        <p>By continuing, you agree to accept our <Link to='/Privacy'><span style={{ color: "#24C6AF", fontWeight: "500" }}> Privacy Policy </span></Link> and <Link to='/terms'><span style={{ color: "#24C6AF", fontWeight: "500" }}>Terms of Service</span></Link></p>
                    </div>
                </div>
            </form>
            </div>
        </>
    )
}
