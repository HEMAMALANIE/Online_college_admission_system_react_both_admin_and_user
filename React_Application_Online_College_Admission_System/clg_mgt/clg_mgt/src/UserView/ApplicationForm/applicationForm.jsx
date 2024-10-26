// import React from 'react'
import { useState } from 'react';
import axios from 'axios';
const ApplicationForm = () => {

    const [name, setName] = useState('');
    const [gender, setGender] = useState('');
    const [parentContact, setParentContact] = useState('');
    const [studentCourse, setStudentCourse] = useState('');
    const [electives, setElectives] = useState('');
    const [obtainedMarks, setObtainedMarks] = useState('');
    const [totalMarks, setTotalMarks] = useState('');
  
    const submitApplicationForm = async (event) => {
      event.preventDefault();
  
      const formData = {
        name,
        gender,
        parentContact,
        studentCourse,
        electives,
        obtainedMarks,
        totalMarks,
      };
  
      try {
        const response = await axios.post('http://localhost:3000/college/submitApplicationForm', formData);
  
    
        if(response){
            alert("sucessfully submitted")
        }
        
      } catch (error) {
        console.error('Error submitting application form:', error);
      }
    };

  return (
    <div className="container px-5">

    <div className="text-center my-5">
        <h1 className="fw-bolder mainFontColor">Application Registration</h1>
    </div>

    <form  id="registrationForm" onSubmit={submitApplicationForm}>
   
    <div className="row py-5">
        <h3 className="mainFontColor">Personal Information</h3>
        <hr />
        <div className="col-6">
            <div className="form-group">
                <label htmlFor="">Name<span className="text-danger">*</span> </label>
                <input type="text" id="studentName" onChange={(e) => setName(e.target.value)} className="form-control" required />
            </div>
        </div>
        <div className="col-6">
            <div className="row">
                <div className="col-4">
                    <div className="form-group">
                        <label htmlFor="">Date of Birth<span className="text-danger">*</span> </label>
                        <input type="date" name=""  className="form-control" id="" required />
                    </div>
                </div>
                <div className="col-4">
                    <div className="form-group">
                        <label htmlFor="gender">Gender:</label>
                        <select id="gender" name="gender" onChange={(e) => setGender(e.target.value)} className="form-control" required >
                            <option value="">Select</option>
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                            <option value="other">Other</option>
                        </select>
                    </div>
                </div>

                <div className="col-4">
                    <label htmlFor="cast">Caste:</label>
                    <input type="text" id="cast" name="cast" className="form-control" required /><br />
                </div>
                
            </div>
            
        </div>
        <div className="col-6">
            <label htmlFor="presentAddress">Present Address:</label>
            <textarea id="presentAddress" name="presentAddress" className="form-control" required ></textarea>
        </div>
        
    </div>

    <div className="row py-4">
        <h3>Parent Information</h3>
        <hr />
        <div className="col-4">
            <label htmlFor="fatherName">Father's Name:</label>
            <input type="text" id="fatherName" name="fatherName" className="form-control" required />
        </div>
        <div className="col-4">
            <label htmlFor="motherName">Mother's Name:</label>
            <input type="text" id="motherName" name="motherName" className="form-control" required />
        </div>
        <div className="col-4">
            <label htmlFor="parentContact">Parent's Contact Number:</label>
             <input type="tel" id="parentContact" onChange={(e) => setParentContact(e.target.value)} name="parentContact" className="form-control" required />
        </div>


    </div>


      
    <div className="row py-4">
        <h3>Guardian Information (if any)</h3>
        <hr />
        <div className="col-4">
        <label htmlFor="guardianName">Guardian's Name:</label>
        <input type="text" id="guardianName" name="guardianName" className="form-control" />
        </div>
        <div className="col-4">
        <label htmlFor="guardianContact">Guardian's Contact Number:</label>
        <input type="tel" id="guardianContact" name="guardianContact" className="form-control" />
        </div>
        <div className="col-4">
        <label htmlFor="guardianAddress">Guardian's Address:</label>
        <textarea id="guardianAddress" name="guardianAddress" className="form-control"></textarea>
        </div>
    </div>

    <div className="row py-4">
    <h3>Particulars of Last Examination Passed</h3>
    <hr />
    <div className="col-4">
        <label htmlFor="examName">Name of the Examination:</label>
        <input type="text" id="examName" name="examName" className="form-control" required />
    </div>
    <div className="col-2">
        <label htmlFor="examYear">Year:</label>
        <input type="text" id="examYear" name="examYear" className="form-control" required />
    </div>
    <div className="col-3">
        <label htmlFor="boardName">Name of the Board:</label>
        <input type="text" id="boardName" name="boardName" className="form-control" required />
    </div>
    <div className="col-3">
        <label htmlFor="rollNo">Roll No:</label>
        <input type="text" id="rollNo" name="rollNo" className="form-control" required />
    </div>
    <div className="col-4">
        <label htmlFor="subjects">Subjects:</label>
        <input type="text" id="subjects" name="subjects" className="form-control" required />
    </div>
    <div className="col-3">
        <label htmlFor="totalMarks">Total Marks:</label>
        <input type="number" id="totalMarks" onChange={(e) => setTotalMarks(e.target.value)} name="totalMarks" className="form-control" required />
    </div>
    <div className="col-2">
        <label htmlFor="obtainedMarks">Obtained Marks:</label>
        <input type="number" id="obtainedMarks" onChange={(e) => setObtainedMarks(e.target.value)} name="obtainedMarks" className="form-control" required />
    </div>
    <div className="col-3">
        <label htmlFor="division">Division:</label>
        {/* <!-- <input type="text" id="division" name="division" className="form-control" required /> --> */}
        <select name="" id="student_division"  className="form-control">
            <option value="None" className="form-control">Select Division</option>
            <option value="First Division" className="form-control">First Division 60% - 100%</option>
            <option value="Second Division" className="form-control">Second Division 50% - 60%</option>
            <option value="Third Division" className="form-control">Third Division 40% - 50%</option>
        </select>
    </div>
    </div>



    <div className="row py-4">
        <h3>Course Offered</h3>
        <hr />
        <div className="col-4">
            
            <label htmlFor="">Select the course : </label>
                <select name="" id="student_course" onChange={(e) => setStudentCourse(e.target.value)} className="form-control">
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
        <div className="col-4 mt-4 d-flex align-item-center justify-content-center">
            <label htmlFor="electives" className="me-5">Student Type:</label>
            <span>
                <input type="radio" id="electives" className="" name="electives" value="Fresher"  onChange={(e) => setElectives(e.target.value)} required />Fresher
            </span>
            <span>
                <input type="radio" id="electives" className="ms-3" name="electives" value="Lateral Entry"  onChange={(e) => setElectives(e.target.value)} required />Lateral Entry
            </span>
        </div>
    </div>


    <div className="row py-4">
        <h3>Other Information</h3>
        <hr />
        <div className="col-4">
            <label htmlFor="instituteAttended">Name of the Institute Last Attended:</label>
            <input type="text" id="instituteAttended" name="instituteAttended" className="form-control" required />
        </div>
        <div className="col-4">
            <label htmlFor="extraActivities">Particulars of Extra Curricular Activities (if any):</label>
            <textarea id="extraActivities" name="extraActivities" className="form-control"></textarea>
        </div>
    </div>

    <div className="row py-5">
        <h3>Photos & Documents</h3><hr />
        <div className="col-3">
            <label htmlFor="passport">Passport:</label>
            <input type="file" id="passport" name="passport" className="form-control" accept="image/*" required />
        </div>
        <div className="col-3">
            <label htmlFor="signature">Signature:</label>
            <input type="file" id="signature" name="signature" className="form-control" accept="image/*" required />
        </div>
        <div className="col-4">
            <label htmlFor="markSheet">Mark Sheet:</label>
            <input type="file" id="markSheet" name="markSheet" className="form-control" accept=".pdf,.doc,.docx" required />
        </div>
        <div className="col-4 pt-3">
            <label htmlFor="passCertificate">Pass Certificate:</label>
            <input type="file" id="passCertificate" name="passCertificate" className="form-control" accept=".pdf,.doc,.docx" required />
        </div>
        <div className="col-4 pt-3">
            <label htmlFor="castCertificate">Cast Certificate:</label>
            <input type="file" id="castCertificate" name="castCertificate" className="form-control" accept=".pdf,.doc,.docx" required />
        </div>
    </div>
    <div className="text-center pb-5 mb-5">
        <input type="submit" className="btn btn-primary" value="Submit" />
    </div>
            
    </form>
</div>



  )
}

export default ApplicationForm;