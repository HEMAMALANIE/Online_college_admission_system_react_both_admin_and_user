// import React from 'react'

const Navbar_admin = () => {

  const logout = ()=>{
    localStorage.setItem('isAdminAuth' , '')
    window.location.href = "/admin";
  }

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light border-bottom">
        <div className="container-fluid">
            <button className="btn btn-white" id="sidebarToggle"><i className="fa-solid fa-arrow-left"></i></button>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon"></span></button>
            
            <div className="contact_box d-md-flex d-none">
                <a href="" className="px-3 py-2 align-self-center text-decoration-none fw-bold rounded-1 profile"><i className="fa-solid fa-user me-2"></i> Admin</a>
                <div onClick={logout} className="px-3 py-2 cursor_pointer align-self-center text-decoration-none fw-bold rounded-1 logout">Logout</div>
            </div>
        </div>
        
    </nav>
  )
}

export default Navbar_admin