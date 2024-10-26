import { useEffect, useState } from 'react';
import axios from 'axios';

const Status = () => {
  const [enquiries, setEnquiries] = useState([]);

  useEffect(() => {
    fetchEnquiries();
  }, []);

  const fetchEnquiries = async () => {
    try {
      const response = await axios.get('http://localhost:3000/college/listApplicationEnquires');

      if (response && response.data.applicationEnquiryList) {
        setEnquiries(response.data.applicationEnquiryList);
      }
    } catch (error) {
      console.error('Error fetching enquiries:', error);
    }
  };

  return (
    <div className="row">
      <div className="col"></div>
      <div className="col-12">
        <table className="table table-striped">
          <thead>
            <tr className="text-center">
              <th scope="col">S.No</th>
              <th scope="col">Name</th>
              <th scope="col">Email</th>
              <th scope="col">Mobile No</th>
              <th scope="col">Location</th>
              <th scope="col">School Name</th>
              <th scope="col">Maths</th>
              <th scope="col">Physics</th>
              <th scope="col">Chemistry</th>
              <th scope="col">Course</th>
              <th scope="col">Marks</th>
              <th scope="col">Cut Off</th>
              <th scope="col">Submitted Date</th>
            </tr>
          </thead>
          <tbody id="table_body">
            {enquiries && enquiries
              .filter(item => item.status) 
              .map((item, index) => (
                <tr key={index} className="text-center">
                  <td>{index + 1}</td>
                  <td>{item.student_name}</td>
                  <td>{item.student_email}</td>
                  <td>{item.student_mobile}</td>
                  <td>{item.student_location}</td>
                  <td>{item.student_scl_name}</td>
                  <td>{item.student_maths}</td>
                  <td>{item.student_physics}</td>
                  <td>{item.student_chemistry}</td>
                  <td>{item.student_course}</td>
                  <td>{item.student_marks}</td>
                  <td>{item.student_cutoff}</td>
                  <td>{item.date}</td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
      <div className="col"></div>
    </div>
  );
}

export default Status;
