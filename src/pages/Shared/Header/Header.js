import React, { useContext } from 'react';
import { FaServicestack, FaUser } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../Contexts/AuthProvider/AuthProvider';

const Header = () => {
    const { user, logOut } = useContext(AuthContext)

    const handleLogOut = () => {
        logOut()
            .then()
            .catch(e => console.error(e))
    }
    const menuItems = <>
        {
            user?.uid ?
                <>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/services">Services</Link></li>
                    <li><Link to="/blog">Blogs</Link></li>
                    <li><Link to="/myreview">My Reviews</Link></li>
                    <li><Link to="/addservice">Add Service</Link></li>
                    <li><Link to="/about">About</Link></li>
                </>
                :
                <>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/services">Services</Link></li>
                    <li><Link to="/blog">Blogs</Link></li>
                    <li><Link to="/about">About</Link></li>
                </>

        }
    </>
    return (
        <div >
            <div className="navbar bg-base-300 py-4 px-4">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2  shadow bg-base-100 font-semibold rounded-box w-52">
                            {menuItems}
                        </ul>
                    </div>
                    <Link to="/" className="btn btn-ghost normal-case text-2xl"><FaServicestack /><span className='text-orange-500'>Health</span>Care</Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal p-0 gap-1 text-gray-600 font-semibold">
                        {menuItems}
                    </ul>
                </div>
                <div className="navbar-end">
                    {
                        user?.uid ?
                            <>
                                <button className="btn btn-ghost font-bold text-info"><Link onClick={handleLogOut} to=''>Log Out</Link></button>
                            </>
                            :
                            <>
                                <button className="btn btn-ghost  font-bold text-info mr-1"> <Link to="/login">Login</Link></button>
                                <button className="btn btn-ghost  font-bold text-info mr-2">  <Link to="/signup">SignUp</Link></button>
                            </>
                    }
                </div>
            </div>
        </div>
    );
};

export default Header;