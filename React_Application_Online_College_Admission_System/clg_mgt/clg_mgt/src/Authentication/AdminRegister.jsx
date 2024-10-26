import { useState } from 'react';
import axios from 'axios';

import { useNavigate } from 'react-router-dom';

const AdminRegister = () => {


  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [secretCode, setSecretCode] = useState('');
  const [error, setError] = useState('');

  const handleAdminRegisterSubmit = async (e) => {
    e.preventDefault();

    const secretCodeFromEnv = import.meta.env.VITE_SECRET_CODE;

    // Frontend validation
    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    if (secretCode !== secretCodeFromEnv) {
      setError('Invalid secret code');
      return;
    }

    try {
      const response = await axios.post('http://localhost:3000/admin/register', {
        email,
        password,
      });

      if (response.status === 201) {
        
        alert('Admin registered successfully');
        navigate('/admin');
        
        // Optionally, redirect or clear form here
      } else {
        setError(response.data.message);
      }
    } catch (error) {
      console.error('Error registering admin:', error);
      setError('Internal server error');
    }
  };

  return (
    <div className="container">
      <div className="row mt-5">
        <div className="col-3"></div>
        <div className="col-6">
          <div className="border border-dark p-5 rounded-4 mt-5 bg-light">
            <h2 className="fw-bold text-center">Admin Register</h2>
            {error && <p className="text-danger text-center">{error}</p>}
            <form id="adminRegisterForm" onSubmit={handleAdminRegisterSubmit}>
              <div className="row pt-3">
                <div className="col-12">
                  <div className="form-group">
                    <label htmlFor="email">Email:</label>
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
                <div className="col-12">
                  <div className="form-group">
                    <label htmlFor="password">Password:</label>
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
              </div>
              <div className="row pt-3">
                <div className="col-12">
                  <div className="form-group">
                    <label htmlFor="confirmPassword">Confirm Password:</label>
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
              <div className="row pt-3">
                <div className="col-12">
                  <div className="form-group">
                    <label htmlFor="secretCode">Secret Code:</label>
                    <input
                      type="password"
                      id="secretCode"
                      className="form-control"
                      value={secretCode}
                      onChange={(e) => setSecretCode(e.target.value)}
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
          </div>
        </div>
        <div className="col-3"></div>
      </div>
    </div>
  );
};

export default AdminRegister;
