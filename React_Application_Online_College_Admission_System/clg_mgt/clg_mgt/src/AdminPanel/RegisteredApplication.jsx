import { useEffect, useState } from 'react';
import axios from 'axios';

const RegisteredApplication = () => {
  const [applicationForms, setApplicationForms] = useState([]);


  useEffect(() => {
    const fetchApplicationForms = async () => {
      try {
        const response = await axios.get('http://localhost:3000/college/listApplicationForms');
        // const response = 'http://localhost:3000/college/listApplicationForms';
        if(response){
          setApplicationForms(response.data.applicationFormList);
        }
      } catch (error) {
        console.error('Error fetching application forms:', error);
      }
    };

    fetchApplicationForms();
  }, []);

  return (
    <div className="row">
      <div className="col-1"></div>
      <div className="col-10">
        <table className="table table-striped">
          <thead>
            <tr>
              <th scope="col">S.No</th>
              <th scope="col">Student Name</th>
              <th scope="col">Gender</th>
              <th scope="col">Parent Contact</th>
              <th scope="col">Student Course</th>
              <th scope="col">Electives</th>
              <th scope="col">Obtained Marks</th>
              <th scope="col">Total Marks</th>
            </tr>
          </thead>
          <tbody>
            {applicationForms.map((form, index) => (
              <tr key={index} className="text-center">
                <td>{index + 1}</td>
                <td>{form.name}</td>
                <td>{form.gender}</td>
                <td>{form.parentContact}</td>
                <td>{form.studentCourse}</td>
                <td>{form.electives}</td>
                <td>{form.obtainedMarks}</td>
                <td>{form.totalMarks}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="col-1"></div>
    </div>
  );
};

export default RegisteredApplication;
