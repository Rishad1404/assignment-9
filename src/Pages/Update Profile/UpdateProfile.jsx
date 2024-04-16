import { useState, useContext } from "react";
import toast, { Toaster } from 'react-hot-toast';
import Navbar from "../Shared/Navbar/Navbar";
import { AuthContext } from "../../AuthContext/AuthProvider";
import { CgProfile } from "react-icons/cg";
import { Helmet } from "react-helmet-async";

const UpdateProfile = () => {
    const { user, updateUserProfile, updateEmail } = useContext(AuthContext);

    // State variables to hold form data
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [photoURL, setPhotoURL] = useState("");

    // Function to handle form submission
    const handleSaveChanges = (e) => {
        e.preventDefault();
        
        updateUserProfile(name, photoURL)
            .then(() => {
                updateEmail(email)
                    .then(() => {
                        toast.success('Changes Saved');
                        setName("");
                        setEmail("");
                        setPhotoURL("");
                    })
                    .catch((error) => {
                        console.error(error);
                        toast.error('Failed to update email');
                    });
            })
            .catch((error) => {
                console.error(error);
                toast.error('Failed to update profile');
            });
    };

    return (
        <div className="container mx-auto">
            <Helmet>
                <title>Elite Estate | Update Profile</title>
            </Helmet>
            <Navbar />
            <div className="my-10 w-full lg:w-3/4 bg-slate-100 lg:flex gap-10 items-center justify-center mx-auto">
                <div>
                    <div className="w-96 h-96 rounded-full overflow-hidden border-2 border-gray-300 lg:my-10">
                        {user && user.photoURL ? (
                            <img className="w-full h-full object-cover" src={user.photoURL} alt="Profile" />
                        ) : (
                            <CgProfile className="w-full h-full object-cover text-gray-500" />
                        )}
                    </div>
                    <div className="my-5">
                        <p className="font-bold">
                            Name: <span className="text-orange-500">{user ? user.displayName : "N/A"}</span>
                        </p>
                        <p className="font-bold">
                            Email: <span className="text-orange-500">{user ? user.email : "N/A"}</span>
                        </p>
                        <p className="font-bold">
                            UserID: <span className="text-orange-500">{user ? user.uid : "N/A"}</span>
                        </p>
                    </div>
                </div>
                <div>
                    <h1 className="text-4xl font-extrabold text-orange-500 mb-10 text-center">Update Profile</h1>
                    <form onSubmit={handleSaveChanges} className=" mx-auto">
                        <div className="mb-4">
                            <label className="block mb-2" htmlFor="name">
                                Name
                            </label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                placeholder="Name"
                                className="w-full border border-gray-300 rounded-md px-3 py-2"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                required
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block mb-2" htmlFor="email">
                                Email
                            </label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                placeholder="Email"
                                className="w-full border border-gray-300 rounded-md px-3 py-2"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block mb-2" htmlFor="photo">
                                Photo URL
                            </label>
                            <input
                                type="text"
                                id="photo"
                                name="photo"
                                placeholder="Photo URL"
                                className="w-[600px] border border-gray-300 rounded-md px-3 py-2"
                                value={photoURL}
                                onChange={(e) => setPhotoURL(e.target.value)}
                                required
                            />
                        </div>
                        <button type="submit" className="bg-orange-500 text-white px-4 py-2 rounded-md hover:bg-black">
                            Save Changes
                        </button>
                    </form>
                </div>
            </div>
            <Toaster position="top-right" reverseOrder={false} />
        </div>
    );
};

export default UpdateProfile;
