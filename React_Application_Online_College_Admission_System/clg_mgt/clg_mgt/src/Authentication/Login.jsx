import { useState } from 'react';
import { Link } from "react-router-dom";
import axios from 'axios';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmitLogin = async (e) => {
        e.preventDefault();

        const loginData = {
            username,
            password,
        };

        try {
            const response = await axios.post('http://localhost:3000/auth/login', loginData);

            if (response.status === 200) {
                localStorage.setItem('isAuthCollege', response.data.token);
                window.location.href = '/';
            } else {
                alert('Login failed. Please check your username and password.');
            }
        } catch (error) {
            console.error('Error logging in:', error);
            alert('An error occurred during login. Please try again.');
        }
    };

    return (
       
        
        <div className="container">
            <div className="row mt-5">
                <div className="col-3"></div>
                <div className="col-6">
                    <div className="border border-dark p-5 rounded-4 mt-5 bg-light">
                        <h2 className="fw-bold text-center">Login</h2>

                        <form id="loginForm" onSubmit={handleSubmitLogin}>
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
                            </div>
                            <div className="text-center pt-5">
                                <button type="submit" className="btn btn-success fw-bold px-4 rounded-pill">Login</button>
                            </div>
                        </form>

                        <div className="text-center mt-3">
                            <span>I dont have an account! <Link to="/college/register" className="fw-bold">Register</Link></span>
                        </div>
                    </div>
                </div>
                <div className="col-3"></div>
            </div>
        </div>
    
        
    );
};

export default Login;
