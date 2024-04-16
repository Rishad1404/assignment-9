import toast, { Toaster } from 'react-hot-toast';
import { Link, NavLink, useLocation, useNavigate } from 'react-router-dom';
import logo from '../../../assets/images/logo.png';
import { CgProfile } from "react-icons/cg";
import { useContext } from 'react';
import { AuthContext } from '../../../AuthContext/AuthProvider';
import { Tooltip } from 'react-tooltip'

const Navbar = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const { user, logOut } = useContext(AuthContext);

    const handleLogout = () => {
        logOut()
            .then(() => {
                toast.success('Logged Out');
                navigate(location.state = '/login');
            })
            .catch(() => {
                toast.error("Logout failed");
            });
    }

    const navLinks = (
        <>
            <li><NavLink className='text-xl font-mono font-bold' to='/'>Home</NavLink></li>
            <li><NavLink className='text-xl font-bold font-mono' to='/features'>About</NavLink></li>

            <li><NavLink className='text-xl font-bold font-mono' to='/properties'>Properties</NavLink></li>

            {
                user ? <li><NavLink className='text-xl font-bold font-mono' to='/updateProfile'>Update Profile</NavLink></li> : null
            }
            {
                user ? <li><NavLink className='text-xl font-bold font-mono' to='/userProfile'>User Profile</NavLink></li> : null
            }
        </>
    );

    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {navLinks}
                    </ul>
                </div>
                <Link to='/'><img className='w-20 lg:w-36' src={logo} alt="" /></Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navLinks}
                </ul>
            </div>
            <div className="navbar-end gap-5">
                <div tabIndex={0} role="button" className="h-10 w-10 rounded-full avatar bg-slate-200">
                    <div id="my-anchor-element-id" className="rounded-full my-anchor-element">
                        {user && user.photoURL ? (
                            <img type="button" className="w-full h-full object-cover" src={user.photoURL} alt="Profile" />
                        ) : (
                            <CgProfile className="w-full h-full object-cover" />
                        )}
                        {user && user.displayName && (
                            <Tooltip anchorSelect="#my-anchor-element-id" place="left" content={user.displayName} />
                        )}
                    </div>
                </div>

                {
                    user ?
                        <div> <button onClick={handleLogout} className='btn bg-orange-500 text-white text-xl font-mono'>Logout</button><Toaster position="top-right"
                            reverseOrder={false} /></div> :
                        <Link to='/login'><button className='btn bg-orange-500 text-white text-xl font-mono'>Login</button></Link>
                }

            </div>

        </div>
    );
};

export default Navbar;
