// import React from 'react'
import Header from "../layouts/header"
import About from "./about";
import HighOfficials from "./highOfficials";
import Placements from "./placements";
import { ContactUs } from "./contactUs";
import '../assets/css/homepage.css';

// import axios from "axios";

import ApplicationForm from "./ApplicationForm/applicationForm";

import { Routes, Route} from 'react-router-dom'
// import { useEffect } from "react";
export const HomePage = () => {

  // const authCollege = localStorage.getItem('isAuthCollege');

  // const checkAuth = async()=>{
  //   if(!authCollege){
  //     window.location.href = '/';
  //   }
  //   // const checkAuths = await axios.post('http://localhost:3000/college/checkAuth');

  // }

  // useEffect(() => {
  //   checkAuth();
   
  // }, []);



  return (
  

    <>
    
        <Header />

        <Routes>

            <Route path="/" element={
                    <main>
                      <About /> 
                      <section>
                          <HighOfficials />
                      </section>
                      <Placements />
                      <section>
                          <ContactUs />
                      </section>
                    </main>
            } />

            <Route path="/applicationForm" element={<ApplicationForm />} />



        </Routes>

        </>
       

  )
}
