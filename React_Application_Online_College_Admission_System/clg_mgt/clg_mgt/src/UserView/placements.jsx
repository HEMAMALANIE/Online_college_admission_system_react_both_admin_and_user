// import React from 'react'

import vishwanathan from '../assets/images/placement-staff.webp'

import download from '../assets/images/download.png';
import download1 from '../assets/images/download (1).png';
import accenture from '../assets/images/accenture.png';
import cisco from '../assets/images/cisco.png';
import HCL from '../assets/images/HCL.png';
import infosys from '../assets/images/infosys.png';
import TATA from '../assets/images/TATA.png';
import Byjus from '../assets/images/Byjus.png';

import placedStudents1 from '../assets/images/PLACED_STUDENTS_1.jpg';
import placedStudents2 from '../assets/images/placed_students-2.jpg';
import placedStudents3 from '../assets/images/placed_students_3.jpg';



const Placements = () => {
  return (
    <section id="placements">
            <div className="container my-5 px-5">
                <h1 className="fw-bolder mt-5 mainFontColor">ABOUT PLACEMENT AND TRAINING CELL</h1>
                
                <div className="row mt-5">
                    <div className="col-4 d-flex justify-content-center">
                        <div className="">
                            <img src={vishwanathan} height="297px" alt="" />
                        </div>
                    </div>
                    <div className="col-8">
                        <div className="">
                            <h3 className='mainFontColor fw-bold'>Prof. S. Viswanathan</h3>
                            <span>Placement Head</span>
                            <p className="mt-3">Our college has established a Training and Placement Cell, caters to the needs of the professionals and invites various companies in all branches of engineering, arranging industrial visits; industrial training during vacation, organizing interviews, providing job market information to students and necessary inputs to face the interviews, and organizing Guest Lecturers. Keeping in view of the growing importance of soft skills in present day competitive world, the department is imparting soft skills to the students’ right from First Year onwards. Along with regular subjects, a separate session is allotted to each branch for training on aptitude, verbal and soft skills.</p>
                            <p className="m-0">Contacts: +91-9442136456</p>
                            <p>Mail ID: placement@ifet.ac.in</p>
                        </div>
                    </div>
                </div>

                <div className="my-5 pt-5">
                    <h1 className="fw-bolder mainFontColor">OUR TOP RECUIRTERS</h1>


                    <div className="d-flex gap-5 my-5 align-items-center justify-content-center flex-wrap">
                        <img src={download} className="company_image" alt="Download" />
                        <img src={download1} className="company_image" alt="Download 1" />
                        <img src={accenture} className="company_image" alt="Accenture" />
                        <img src={cisco} className="company_image" alt="Cisco" />
                        <img src={HCL} className="company_image" alt="HCL" />
                        <img src={infosys} className="company_image" alt="Infosys" />
                        <img src={TATA} className="company_image" alt="TATA" />
                        <img src={Byjus} className="company_image" alt="Byjus" />
                    </div>

                </div>
                <div className="my-5 pt-5">
                    <h1 className="fw-bolder mainFontColor">PREVIOUSLY PLACED STUDENTS</h1>

                    <div className="row mt-5">
                        <div className="col-4">
                        <img src={placedStudents1} className="placed_students img-fluid" alt="Placed Students 1" />
                        </div>
                        <div className="col-4">
                        <img src={placedStudents2} className="placed_students img-fluid" alt="Placed Students 2" />
                        </div>
                        <div className="col-4">
                        <img src={placedStudents3} className="img-fluid" alt="Placed Students 3" />
                        </div>
                    </div>
                </div>
            </div>

        </section>
  )
}

export default Placements