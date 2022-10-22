import React from 'react'

export default function Copyright() {
  return (
    <>
    <section>
        <div className="container">
            <div className="copyright">
                <div className="rights">
                    <h5>Copyright © {new Date().getFullYear()} NES Global Solutions Pvt Ltd.</h5>
                </div>
                <div className="terms">
                    <a href='/terms'><h5>Terms of Use / Privacy Policy</h5></a>
                </div>
            </div>
        </div>
    </section>
    </>
  )
}
