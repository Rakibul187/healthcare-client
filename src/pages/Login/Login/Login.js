import React from 'react';
import { Link } from 'react-router-dom';
import img from '../../../assets/login/login5.webp'
const Login = () => {
    const handleLogin = event => {
        event.preventDefault()
    }
    return (
        <div>
            <div className="hero w-full my-20 sm:mx-auto">
                <div className="hero-content grid  md:grid-cols-2 flex-col lg:flex-row">
                    <div className="text-center lg:text-left mb-20">
                        <img className='w-3/4' src={img} alt="" />
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 py-20">
                        <h1 className="text-5xl text-center font-bold">Login</h1>
                        <form onSubmit={handleLogin} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="text" name='email' placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="text" name='password' placeholder="password" className="input input-bordered" required />
                            </div>
                            <div className="form-control mt-6">
                                <input className="btn btn-primary" type="submit" value="Login" />
                            </div>
                        </form>
                        <p className='text-center'>New to HealthCare <Link className='text-orange-600 font-bold' to="/signup">Sign Up</Link> </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;