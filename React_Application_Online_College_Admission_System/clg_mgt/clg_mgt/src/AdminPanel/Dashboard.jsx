import { useEffect, useState } from 'react';
import axios from 'axios';

const Dashboard = () => {
  const [admissionEnquiriesCount, setAdmissionEnquiriesCount] = useState(0);
  const [registeredApplicationsCount, setRegisteredApplicationsCount] = useState(0);
  const [coursesCount, setCoursesCount] = useState(0);
  const [userAccountsCount, setUserAccountsCount] = useState(0);
  
  useEffect(() => {
    const fetchCounts = async () => {
      try {
        const response = await axios.get('http://localhost:3000/admin/fetchDashboardData'); 
        const data = response.data;
        setAdmissionEnquiriesCount(data.admissionEnquiriesCount);
        setRegisteredApplicationsCount(data.registeredApplicationsCount);
        // setCoursesCount(data.coursesCount);
        setUserAccountsCount(data.userAccountsCount);
      } catch (error) {
        console.error('Error fetching counts:', error);
      }
    };
  
    fetchCounts();
  }, []);

  return (
    <div className="d-flex gap-3 flex-md-row flex-column align-items-center">
      <div className="sub_section_box px-4 py-4 rounded-3">
        <h1>{admissionEnquiriesCount}</h1>
        <h3>Admission Enquiry</h3>
      </div>
      <div className="sub_section_box px-4 py-4 rounded-3">
        <h1>{registeredApplicationsCount}</h1>
        <h3>Registered Applications</h3>
      </div>
      <div className="sub_section_box px-4 py-4 rounded-3">
        <h1>{coursesCount}</h1>
        <h3>Courses</h3>
      </div>
      <div className="sub_section_box px-4 py-4 rounded-3">
        <h1>{userAccountsCount}</h1>
        <h3>User Account</h3>
      </div>
    </div>
  );
};

export default Dashboard;
