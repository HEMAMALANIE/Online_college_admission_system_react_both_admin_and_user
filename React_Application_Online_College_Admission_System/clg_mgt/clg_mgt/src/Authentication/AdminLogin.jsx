import { useState } from 'react';
import axios from 'axios';

const AdminLogin = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleAdminLoginSubmit = async (e) => {
        e.preventDefault();

        const adminData = {
            email,
            password,
        };

        try {
            const response = await axios.post('http://localhost:3000/admin/login', adminData);

            if (response.status === 200) {
                localStorage.setItem('isAdminAuth', response.data.token);
                window.location.href = '/admin';
            } else {
                alert('Login failed. Please check your email and password.');
            }
        } catch (error) {
            console.error('Error logging in admin:', error);
            alert('An error occurred during login. Please try again.');
        }
    };

    return (
       
        <div className="container" >
            <div className="row pt-5">
                <div className="col-3"></div>
                <div className="col-6">
                    <div className="border border-dark p-5 rounded-4 mt-5 bg-light">
                        <h2 className="fw-bold text-center">Admin Login</h2>

                        <form id="adminLoginForm" onSubmit={handleAdminLoginSubmit}>
                            <div className="row pt-3">
                                <div className="col-12">
                                    <div className="form-group">
                                        <label htmlFor="adminName">Admin Email :</label>
                                        <input
                                            type="email"
                                            id="adminName"
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
                                        <label htmlFor="adminPassword">Password :</label>
                                        <input
                                            type="password"
                                            id="adminPassword"
                                            className="form-control"
                                            value={password}
                                            onChange={(e) => setPassword(e.target.value)}
                                            required
                                        />
                                    </div>
                                </div>
                            </div>

                            <div className="text-center pt-5">
                                <button
                                    type="submit"
                                    className="btn text-decoration-none btn-success fw-bold px-4 rounded-pill"
                                >
                                    Login
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

export default AdminLogin;
