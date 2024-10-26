// import React from 'react'
import {Routes, Route} from 'react-router-dom'
import { HomePage } from '.'
import Login from '../Authentication/Login'
import Register from '../Authentication/Register'
const UserRouting = () => {

    const isAuth = localStorage.getItem('isAuthCollege')

  return (
          <>
            {isAuth? 

            <Routes>

              <Route path="/" element={<HomePage />} />
              <Route path="/*" element={<HomePage />} />

            </Routes>

            :

            <Routes>

              <Route path="/" element={<Login />} />
              <Route path="/register" element={<Register />} />

            </Routes>


            }
          </>

  )
}

export default UserRouting