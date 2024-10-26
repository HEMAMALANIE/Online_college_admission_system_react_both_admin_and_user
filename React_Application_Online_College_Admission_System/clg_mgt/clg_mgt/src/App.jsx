
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

import UserRouting from "./UserView/UserRouting"
import AdminRouting from "./AdminPanel/AdminRouting"

function App() {


  return (
    <>
    <Router>

        <Routes>

          <Route path="/" element={<UserRouting />} />
          <Route path="/college/*" element={<UserRouting />} />


          <Route path="/admin" element={<AdminRouting />} />
          <Route path="/admin/*" element={<AdminRouting />} />

        </Routes>

      </Router>
    </>
  )
}

export default App
