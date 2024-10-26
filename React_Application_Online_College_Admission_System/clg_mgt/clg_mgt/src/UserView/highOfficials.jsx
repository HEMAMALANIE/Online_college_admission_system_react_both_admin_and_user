// import React from 'react'

import Raja from '../assets/images/HighOfficials/chairman.png'
import Mahendran from '../assets/images/HighOfficials/principal_pic.png'
import VP from '../assets/images/HighOfficials/vp_pic.png'

const HighOfficials = () => {
  return (
    <div className="container my-5 px-5">
    <div className="row">
        <div className="col-4 p-3 d-flex justify-content-center flex-column align-items-center">
            <div className="">
                <img src={Raja} className="img-fluid" alt="" />
            </div>
            <h4 className="mt-3 mainFontColor fw-bold">Mr. K.V. Raja</h4>
            <p>Chairman</p>

        </div>
        <div className="col-4 d-flex justify-content-center flex-column align-items-center">
            <div className="">
                <img src={Mahendran} className="img-fluid"  alt="" />
            </div>
            <h4 className="mt-3 mainFontColor fw-bold">Dr. G. Mahendran (M.Tech, Ph.D)</h4>
            <p>Our Principal</p>

        </div>
        <div className="col-4 d-flex justify-content-center flex-column align-items-center">
            <div className="">
                <img src={VP} className="img-fluid" alt="" />
            </div>
            <h4 className="mt-3 mainFontColor fw-bold">Dr. S. Matilda (B.E, M.S(IT), Ph.D)</h4>
            <p>Vice Principal & Dean Academics</p>
        </div>
    </div>
</div>
  )
}

export default HighOfficials