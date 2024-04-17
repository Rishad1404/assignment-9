import { useState, useContext, useEffect } from "react";
import toast, { Toaster } from 'react-hot-toast';
import Navbar from "../Shared/Navbar/Navbar";
import { AuthContext } from "../../AuthContext/AuthProvider";
import { CgProfile } from "react-icons/cg";
import { Helmet } from "react-helmet-async";

const UpdateProfile = () => {
    const { user, updateUserProfile } = useContext(AuthContext);

    const [name, setName] = useState("");
    const [photoURL, setPhotoURL] = useState("");
    const [updatingProfile, setUpdatingProfile] = useState(false);

    const handleSaveChanges = (e) => {
        e.preventDefault();
        setUpdatingProfile(true);

        updateUserProfile(name, photoURL)
            .then(() => {
                toast.success('Changes Saved');
                setName("");
                setPhotoURL("");
                setUpdatingProfile(false);
            })
            .catch((error) => {
                console.error(error);
                toast.error('Failed to update profile');
                setUpdatingProfile(false);
            });
    };

    // useEffect to prevent infinite loop caused by state updates
    useEffect(() => {
        if (updatingProfile) {
            return;
        }
    }, [updatingProfile]);

    return (
        <div className="container mx-auto">
            <Helmet>
                <title>Elite Estate | Update Profile</title>
            </Helmet>
            <Navbar />
            <div className="my-10 w-full lg:w-auto bg-slate-100 lg:flex gap-10 items-center justify-center mx-auto">
                <div className="mx-14 lg:flex justify-center items-center gap-10">
                    <div className="w-96 h-96 rounded-full overflow-hidden border-2 border-gray-300 lg:my-10">
                        {user && user.photoURL ? (
                            <img className="w-full h-full object-cover" src={user.photoURL} alt="Profile" />
                        ) : (
                            <CgProfile className="w-full h-full object-cover text-gray-500" />
                        )}
                    </div>
                    <div className="w-[360px] lg:w-auto my-5 text-center border border-orange-500 p-5">
                        <p className=" text-2xl">
                            Name: <span className="text-orange-500 font-extrabold">{user ? user.displayName : "N/A"}</span>
                        </p>
                        <p className="text-2xl">
                            Email: <span className="text-orange-500 font-extrabold">{user ? user.email : "N/A"}</span>
                        </p>
                        <p className="text-2xl">
                            UserID: <span className="text-orange-500 font-extrabold">{user ? user.uid : "N/A"}</span>
                        </p>
                    </div>
                </div>
                <div>
                    <h1 className="text-4xl font-extrabold text-orange-500 mb-10 text-center">Update Profile</h1>
                    <form onSubmit={handleSaveChanges} className=" mx-4 lg:mx-auto">
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
                            <label className="block mb-2" htmlFor="photo">
                                Photo URL
                            </label>
                            <input
                                type="text"
                                id="photo"
                                name="photo"
                                placeholder="Photo URL"
                                className="w-full border border-gray-300 rounded-md px-3 py-2"
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
