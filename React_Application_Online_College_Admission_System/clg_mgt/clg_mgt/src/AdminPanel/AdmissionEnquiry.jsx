import { useEffect, useState } from 'react';
import axios from 'axios';

const AdmissionEnquiry = () => {
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

  const toggleStatus = async (id, currentStatus) => {
    try {
      const newStatus = !currentStatus;
      await axios.put(`http://localhost:3000/college/updateEnquiryStatus/${id}`, { status: newStatus });

      setEnquiries((prevEnquiries) =>
        prevEnquiries.map((enquiry) =>
          enquiry._id === id ? { ...enquiry, status: newStatus } : enquiry
        )
      );
    } catch (error) {
      console.error('Error updating status:', error);
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
              <th scope="col">Status</th>
            </tr>
          </thead>
          <tbody id="table_body">
            {enquiries && enquiries.map((item, index) => (
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
                <td>
                  <input
                    type="checkbox"
                    name="status"
                    checked={item.status}
                    onChange={() => toggleStatus(item._id, item.status)}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="col"></div>
    </div>
  );
};

export default AdmissionEnquiry;
