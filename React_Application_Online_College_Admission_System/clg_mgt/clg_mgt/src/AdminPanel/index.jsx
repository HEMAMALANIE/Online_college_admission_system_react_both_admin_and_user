// import React from 'react'
import SideBar_admin from "../layouts/sideBar_admin"
import Navbar_admin from "../layouts/navbar_admin"
import { Routes, Route} from 'react-router-dom'
import Dashboard from "./Dashboard"
import AdmissionEnquiry from "./AdmissionEnquiry"
import RegisteredApplication from "./RegisteredApplication"
import Course from "./Course"
import UserAccounts from "./UserAccounts"
import '../assets/css/admin.css'

import Status from "./Status"
const AdminPanel = () => {
  return (
    <div className="d-flex" id="wrapper">
        <SideBar_admin />
            <div id="page-content-wrapper">
                <Navbar_admin />
                <div className="container-fluid pt-3" >

                    <Routes>
                        <Route path="/" element={<Dashboard />} />
                        <Route path="/admissionEnquiry" element={<AdmissionEnquiry />} />
                        <Route path="/registeredApplication" element={<RegisteredApplication />} />
                        <Route path="/course" element={<Course />} />
                        <Route path="/userAccounts" element={<UserAccounts />} />
                        <Route path="/status" element={<Status />} />
                    </Routes>
                    
                </div>
            </div>
    </div>
  )
}

export default AdminPanel