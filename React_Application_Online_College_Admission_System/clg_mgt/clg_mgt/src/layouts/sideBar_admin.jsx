// import React from 'react'
import { Link } from 'react-router-dom'
import '../assets/css/adminSidebar.css'

const SideBar_admin = () => {
  return (
    <div className="border-end bg-white" id="sidebar-wrapper">
    <div className="sidebar-heading border-bottom bg-light">Admission Admin</div>
    <div className="list-group list-group-flush">
        <Link className="list-group-item list-group-item-action list-group-item-light p-3" to="/admin">Dashboard</Link>
        <Link className="list-group-item list-group-item-action list-group-item-light p-3" to="/admin/admissionEnquiry">Admission Enquiry</Link>
        <Link className="list-group-item list-group-item-action list-group-item-light p-3" to="/admin/registeredApplication">Registered Applications</Link>
        <Link className="list-group-item list-group-item-action list-group-item-light p-3" to="/admin/course">Courses Update</Link>
        <Link className="list-group-item list-group-item-action list-group-item-light p-3" to="/admin/userAccounts">User Accounts</Link>
        <Link className="list-group-item list-group-item-action list-group-item-light p-3" to="/admin/status">Status</Link>
    </div>
</div>
  )
}

export default SideBar_admin