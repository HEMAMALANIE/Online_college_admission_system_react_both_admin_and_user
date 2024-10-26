import { useState } from 'react';
import { Link } from "react-router-dom";
import axios from 'axios';

const Register = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSubmitRegister = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
        alert('Passwords do not match');
        return;
    }

    const formData = {
        username,
        email,
        password,
    };

    // console.log('Form Data:', formData); 

    try {
        const response = await axios.post('http://localhost:3000/auth/register', formData);

        console.log('Response:', response); 

        if (response.data.status === 1) {
            alert(response.data.message);
           
        } else {
            alert(response.data.message);
        }
    } catch (error) {
        console.log('Error registering user:', error.response.data.message);
        alert( error.response.data.message);
    }
};


  return (
    
    <div className="container">
      <div className="row mt-5">
        <div className="col-3"></div>
        <div className="col-6">
          <div className="border border-dark p-5 rounded-4 mt-5 bg-light">
            <h2 className="fw-bold text-center">Register</h2>

            <form id="registerForm" onSubmit={handleSubmitRegister}>
              <div className="row pt-3">
                <div className="col-12">
                  <div className="form-group">
                    <label htmlFor="username">User name :</label>
                    <input
                      type="text"
                      id="username"
                      className="form-control"
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                      required
                    />
                  </div>
                </div>
              </div>
              <div className="row pt-3">
                <div className="col-12">
                  <div className="form-group">
                    <label htmlFor="email">Email :</label>
                    <input
                      type="email"
                      id="email"
                      className="form-control"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                  </div>
                </div>
              </div>
              <div className="row pt-3">
                <div className="col-md-6 col-12">
                  <div className="form-group">
                    <label htmlFor="password">Password :</label>
                    <input
                      type="password"
                      id="password"
                      className="form-control"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                    />
                  </div>
                </div>
                <div className="col-md-6 col-12">
                  <div className="form-group">
                    <label htmlFor="confirmPassword">Confirm password :</label>
                    <input
                      type="password"
                      id="confirmPassword"
                      className="form-control"
                      value={confirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                      required
                    />
                  </div>
                </div>
              </div>
              <div className="text-center pt-5">
                <button type="submit" className="btn btn-success fw-bold px-4 rounded-pill">
                  Register
                </button>
              </div>
            </form>

            <div className="text-center mt-3">
              <span>Already have an account? <Link to="/" className="fw-bold">Login</Link></span>
            </div>
          </div>
        </div>
        <div className="col-3"></div>
      </div>
    </div>
    
  );
};

export default Register;
