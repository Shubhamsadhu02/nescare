import React from 'react'
import { Link} from 'react-router-dom'

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
                    <Link href='https://nesglobal.in/terms'><h5>Terms of Use / Privacy Policy</h5></Link>
                </div>
            </div>
        </div>
    </section>
    </>
  )
}
