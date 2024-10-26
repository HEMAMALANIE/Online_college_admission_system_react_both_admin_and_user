// import React from 'react'
import { useState } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';
import userIcon from '../assets/images/user_icon.png';
export const ContactUs = () => {

  const [formData, setFormData] = useState({
    student_name: '',
    student_email: '',
    student_mobile: '',
    student_location: '',
    student_scl_name: '',
    student_maths: '',
    student_physics: '',
    student_chemistry: '',
    student_course: 'None',
  });

  // Handle input changes
  const handleChange = (event) => {

    //object destructuring
    const { id, value } = event.target;

    // ... - copy of the array or object
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  const handleSubmitAdmission = async (event) => {
    event.preventDefault();

    console.log('Form data:', formData);

    const result = await Swal.fire({
      title: 'Are you sure?',
      text: "Do you want to submit the form?",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, submit it!',
      cancelButtonText: 'No, cancel!',
    });

    if (result.isConfirmed) {
      try {
        const response = await axios.post('http://localhost:3000/college/submitApplicationEnquiry', formData);
        console.log(response.data);

        Swal.fire({
          title: 'Success!',
          text: 'Form submitted successfully!',
          icon: 'success',
          confirmButtonText: 'OK',
        });

        setFormData({
          student_name: '',
          student_email: '',
          student_mobile: '',
          student_location: '',
          student_scl_name: '',
          student_maths: '',
          student_physics: '',
          student_chemistry: '',
          student_course: 'None',
        });
      } catch (error) {
        console.error('Error submitting the form:', error);

        Swal.fire({
          title: 'Error!',
          text: 'There was an error submitting the form.',
          icon: 'error',
          confirmButtonText: 'OK',
        });
      }
    }
  };


  return (
    <div className="container my-5 px-5">
    <div className="pt-5">
        <h1 className="fw-bolder mainFontColor">CONTACT US FOR ADMISSION ENQUIRY</h1>
        <p>Feel free to contact us any time for Admission Enquiry</p>
    </div>
    <div className="row mt-5">
        <div className="col-6">
          <div className="d-flex justify-content-center flex-column align-items-center">
            <img src={userIcon} className="user_icon" alt="User Icon" />
            <span className='mainFontColor fw-bold'>Prof. P. DANESH</span>
            <span>91-9442179456</span>
          </div>
        </div>
        <div className="col-6">
          <div className="d-flex justify-content-center flex-column align-items-center">
            <img src={userIcon} className="user_icon" alt="User Icon" />
            <span className='mainFontColor fw-bold'>Prof. P. DANESH</span>
            <span>91-9442179456</span>
          </div>
        </div>
      </div>

    <div id="courses" className=" mt-5 pt-5">
        <h1 className="fw-bolder mainFontColor">COURSES OFFERED</h1>
       
        <table className="table table-hover mt-3 border">
            <thead>
              <tr>
                <th scope="col">Departments (Under Graduate)</th>
                <th scope="col">No. of seats sanctioned</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>B.E. Computer Science Engineering</td>
                <td>180</td>
              </tr>
              <tr>
                <td>B.Tech. Information Technology</td>
                <td>60</td>
              </tr>
              <tr>
                <td>B.Tech. Artificial Intelligence & Data Science</td>
                <td>60</td>
              </tr>
            
              <tr>
                <td>B.Tech. Artificial Intelligence & Machine Learning</td>
                <td>60</td>
              </tr>
              <tr>
                <td>B.E. Electrical & Electronics Engineering</td>
                <td>60</td>
              </tr>
              <tr>
                <td>B.E. Mechanical Engineering</td>
                <td>120</td>
              </tr>
              <tr>
                <td>B.E. Electronics & Communication Engineering</td>
                <td>180</td>
              </tr>
            
            </tbody>
          </table>
        <table className="table table-hover mt-5 border">
            <thead>
              <tr>
                <th scope="col">Departments (Post Graduate)</th>
                <th scope="col">	No. of seats sanctioned</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>M.E. Computer Science and Engineering</td>
                <td>18</td>
              </tr>
              <tr>
                <td>M.E. Applied Electronics</td>
                <td>18</td>
              </tr>
              <tr>
                <td>Master of Business Administration</td>
                <td>60</td>
              </tr>
            
              
            </tbody>
          </table>
    </div>

    <div id="admission" className="my-5 py-5">
        <h1 className="fw-bolder mainFontColor">ADMISSION ENQUIRY</h1>
        <div className="px-5">
        <form onSubmit={handleSubmitAdmission}>
            <div className="row pt-3">
              <div className="col-md-6 col-12">
                <div className="form-group">
                  <label htmlFor="student_name">Enter your name :</label>
                  <input
                    type="text"
                    id="student_name"
                    value={formData.student_name}
                    onChange={handleChange}
                    placeholder="Your name"
                    className="form-control"
                    required
                  />
                </div>
              </div>
              <div className="col-md-6 col-12">
                <div className="form-group">
                  <label htmlFor="student_email">Email Id:</label>
                  <input
                    type="email"
                    id="student_email"
                    value={formData.student_email}
                    onChange={handleChange}
                    placeholder="Your Email Id"
                    className="form-control"
                    required
                  />
                </div>
              </div>
            </div>
            <div className="row pt-3">
              <div className="col-md-6 col-12">
                <div className="form-group">
                  <label htmlFor="student_mobile">Mobile No:</label>
                  <input
                    type="number"
                    id="student_mobile"
                    value={formData.student_mobile}
                    onChange={handleChange}
                    placeholder="Your Mobile No"
                    className="form-control"
                    required
                  />
                </div>
              </div>
              <div className="col-md-6 col-12">
                <div className="form-group">
                  <label htmlFor="student_location">Location :</label>
                  <input
                    type="text"
                    id="student_location"
                    value={formData.student_location}
                    onChange={handleChange}
                    placeholder="city/district/state"
                    className="form-control"
                    required
                  />
                </div>
              </div>
            </div>
            <div className="row pt-3">
              <div className="col-md-6 col-12">
                <div className="form-group">
                  <label htmlFor="student_scl_name">Enter your School name :</label>
                  <input
                    type="text"
                    id="student_scl_name"
                    value={formData.student_scl_name}
                    onChange={handleChange}
                    placeholder="Your School name"
                    className="form-control"
                    required
                  />
                </div>
              </div>
              <div className="col-md-6 col-12">
                <div className="form-group">
                  <label htmlFor="student_maths">Maths mark :</label>
                  <input
                    type="text"
                    id="student_maths"
                    value={formData.student_maths}
                    onChange={handleChange}
                    placeholder="Your maths mark in 12th"
                    className="form-control"
                    required
                  />
                </div>
              </div>
            </div>
            <div className="row pt-3">
              <div className="col-md-6 col-12">
                <div className="form-group">
                  <label htmlFor="student_physics">Physics mark:</label>
                  <input
                    type="text"
                    id="student_physics"
                    value={formData.student_physics}
                    onChange={handleChange}
                    placeholder="Your Physics mark in 12th"
                    className="form-control"
                    required
                  />
                </div>
              </div>
              <div className="col-md-6 col-12">
                <div className="form-group">
                  <label htmlFor="student_chemistry">Chemistry mark:</label>
                  <input
                    type="text"
                    id="student_chemistry"
                    value={formData.student_chemistry}
                    onChange={handleChange}
                    placeholder="Your Chemistry mark in 12th"
                    className="form-control"
                    required
                  />
                </div>
              </div>
              
              {/* Other fields... */}
            </div>
            <div className="row pt-3">
              <div className="col-md-6 col-12">
                <div className="form-group">
                    <label >Select the course : </label>
                    <select name="" id="student_course" onChange={handleChange} className="form-control">
                        <option value="None" className="form-control">Select prefered course</option>
                        <option value="B.E. Computer Science Engineering" className="form-control">B.E. Computer Science Engineering</option>
                        <option value="B.Tech. Information Technology" className="form-control">B.Tech. Information Technology</option>
                        <option value="B.Tech. Artificial Intelligence & Data Science" className="form-control">B.Tech. Artificial Intelligence & Data Science</option>
                        <option value="B.Tech. Artificial Intelligence & Machine Learning" className="form-control">B.Tech. Artificial Intelligence & Machine Learning</option>
                        <option value="B.E. Electrical & Electronics Engineering" className="form-control">B.E. Electrical & Electronics Engineering</option>
                        <option value="B.E. Mechanical Engineering" className="form-control">B.E. Mechanical Engineering</option>
                        <option value="B.E. Electronics & Communication Engineering" className="form-control">B.E. Electronics & Communication Engineering</option>
                        <option value="M.E. Computer Science and Engineering" className="form-control">M.E. Computer Science and Engineering</option>
                        <option value="M.E. Applied Electronics" className="form-control">M.E. Applied Electronics</option>
                        <option value="Master of Business Administration" className="form-control">Master of Business Administration</option>
                    </select>
                </div>
                </div>

              {/* Other fields... */}
            </div>
            <div className="pt-4 text-center">
              <button type="submit" className="btn px-5 btn-success rounded-pill">Submit</button>
            </div>
          </form>

            <div id="result"></div>
        </div>
    </div>
</div>
  )
}
