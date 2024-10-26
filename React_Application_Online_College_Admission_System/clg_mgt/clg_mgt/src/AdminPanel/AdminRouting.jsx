// import React from 'react'
import {Routes, Route} from 'react-router-dom'
import AdminPanel from '.'
import AdminLogin from '../Authentication/AdminLogin'
import AdminRegister from '../Authentication/AdminRegister'

const AdminRouting = () => {

    const isAdminAuth = localStorage.getItem('isAdminAuth')
  return (

    <>

    {isAdminAuth?
          <Routes>
              <>

                  <Route path="/" element={<AdminPanel />} />
                  <Route path="/*" element={<AdminPanel />} />

              </>
            
          </Routes>
          

          :

              <Routes>

              <>
                  <Route path="/" element={<AdminLogin />} />
                  <Route path="/adminRegister" element={<AdminRegister />} />
                  <Route path="/*" element={<AdminLogin />} />
                 {/* <Route path="/admin/*" element={<AdminLogin />} /> */}
              </>

            

                </Routes>
          }
    
    </>
 

       


  )
}

export default AdminRouting