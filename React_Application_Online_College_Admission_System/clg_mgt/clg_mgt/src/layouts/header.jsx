// import React from 'react'
import Menu from '../assets/images/menu.png'
import CrossCanva from '../assets/images/cross_canva.png'
import Logo from '../assets/images/Logo/Ifetlogo.jpeg'

import { FaUser } from "react-icons/fa";

import { Link } from 'react-router-dom'
const Header = () => {


    const logout = ()=>{
        localStorage.setItem('isAuthCollege' , '');
        window.location.href = '/'
    }

  return (
    <header id="header" className="py-2">
    <nav className="container navbar_section d-flex justify-content-between align-item-center">
        <div className="logo_section d-flex align-item-center justify-content-center gap-2">
            <img src={Logo} className='logoIfet' alt="" />
            <Link className='m-0 h4 d-flex align-items-center fw-bold mainFontColor text-decoration-none' to="/">IFET</Link>
        </div>


        <div className="navlinks_group d-md-flex d-none justify-content-center align-item-center">
            <ul className="ul_nav_links d-flex mb-0">
                <li className="mx-lg-3 mx-md-3 mx-sm-2 align-self-center">
                    <Link className="text-decoration-none mainFontColor" to="/">Home</Link>
                </li>
                <li className="mx-lg-3 mx-md-3 mx-sm-2 align-self-center">
                    <a  className="text-decoration-none mainFontColor" href="/#about">About</a>
                </li>
                <li className="mx-lg-3 mx-md-3 mx-sm-2 align-self-center">
                    <a  className="text-decoration-none mainFontColor" href="/#placements">Placements</a>
                </li>
                <li className="mx-lg-3 mx-md-3 mx-sm-2 align-self-center">
                    <a  className="text-decoration-none mainFontColor" href="/#courses">Courses</a>
                </li>
                <li className="mx-lg-3 mx-md-3 mx-sm-2 align-self-center">
                    <a  className="text-decoration-none" href="/#admission">Admission</a>
                </li>
                <li className="mx-lg-3 mx-md-3 mx-sm-2 align-self-center">
                    <Link  className="text-decoration-none text-nowrap" to="/college/applicationForm">Application Form</Link>
                </li>
            </ul>
        </div>
        <div className="contact_box d-md-flex d-none">
            <a href="" className="px-3 text-nowrap py-2 align-self-center d-flex align-items-center justify-content-center gap-2 text-decoration-none fw-bold rounded-1 profile"><FaUser /> Hemamalni</a>
            <div onClick={logout} className="px-3 cursor_pointer py-2 align-self-center text-decoration-none fw-bold rounded-1 logout">Logout</div>
        </div>


        <button className="btn d-md-none d-block" type="button" data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasWithBothOptions" aria-controls="offcanvasWithBothOptions">
            <img src={Menu} className="mobile_menu" alt="" />
        </button>
        <div className="offcanvas offcanvas-start " data-bs-scroll="true" tabIndex="-1" id="offcanvasWithBothOptions"
            aria-labelledby="offcanvasWithBothOptionsLabel">
            <div className="offcanvas-header">
                <img src={CrossCanva} className="close_btn_offcanvas" data-bs-dismiss="offcanvas" aria-label="Close" alt="" />

                <img src={Logo} className="ms-5 ps-4" alt="" />
            </div>
            <div className="offcanvas-body">
                <ul className="">
                    <li className="ps-3  py-2"><a className=" text-decoration-none fw-bold" href="#">Home</a></li>
                    <li className="ps-3  py-2"><a className=" text-decoration-none fw-bold" href="#">About</a></li>
                    <li className="ps-3  py-2"><a className=" text-decoration-none fw-bold" href="#">Portfolio</a></li>
                    <li className="ps-3  py-2"><a className=" text-decoration-none fw-bold" href="#">Services</a></li>
                    <li className="ps-3  py-2"><a className=" text-decoration-none fw-bold" href="#">Blog</a></li>
                </ul>
                <div className="contact_box d-flex ps-5 pt-4">
                    <a href="" className="px-3 py-2 align-self-center fw-bold rounded-1">Contact</a>
                </div>
            </div>
        </div>
    </nav>
</header>
  )
}

export default Header;