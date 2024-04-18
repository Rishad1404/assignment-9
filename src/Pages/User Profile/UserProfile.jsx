import { useContext } from "react";
import Navbar from "../Shared/Navbar/Navbar";
import { AuthContext } from "../../AuthContext/AuthProvider";
import { CgProfile } from "react-icons/cg";
import { Helmet } from "react-helmet-async";
const UserProfile = () => {
    const { user } = useContext(AuthContext);

    
    return (
        <div className="container mx-auto">
            <Helmet>
                <title>User Profile</title>
            </Helmet>
            <Navbar />
            <div className="my-10 w-full lg:w-3/4 bg-slate-100 lg:flex flex-col items-center justify-center mx-auto p-2">
                <div className="w-80 lg:w-96 h-80 lg:h-96 rounded-full overflow-hidden border-2 border-gray-300 my-7 lg:my-10">
                    {user && user.photoURL ? (
                        <img className="w-full h-full object-cover" src={user.photoURL} alt="Profile" />
                    ) : (
                        <CgProfile className="w-full h-full object-cover text-gray-500" />
                    )}
                </div>
                <div className="text-center mb-10 border">
                    <h1 className="text-3xl lg:text-4xl font-extrabold text-orange-500 mb-8">User Profile</h1>
                    <div className="mx-1 lg:mx-5">
                        <h2 className="my-3 text-xl lg:text-2xl font-mono font-bold">Name:<span className="text-orange-500 border border-orange-500 px-5 py-1">{user.displayName || "N/A"}</span></h2>
                        <h2 className="my-3 text-xl lg:text-2xl font-mono font-bold">Email:<span className="text-orange-500 border border-orange-500 px-5 py-1">{user.email}</span></h2>
                        <h2 className="my-3 text-xl lg:text-2xl font-mono font-bold">UserID:<span className="text-orange-500 border border-orange-500 px-5 py-1">{user.uid}</span></h2>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default UserProfile;
