import Navbar from "../Shared/Navbar/Navbar";

const UpdateProfile = () => {
    return (
        <div className="container mx-auto">
            <Navbar></Navbar>
            <div className="my-10 w-full lg:w-3/4 bg-slate-100 lg:flex gap-10 items-center justify-center mx-auto">
                <div className="w-96 h-96 rounded-full overflow-hidden border-2 border-gray-300 lg:my-10">
                    <img className="w-full h-full object-cover" src='' alt="Profile" />
                </div>
                <div>
                    <h1 className="text-4xl font-extrabold text-orange-500 mb-10 text-center">Update Profile</h1>
                    <form className=" mx-auto">
                        <div className="mb-4">
                            <label className="block mb-2" htmlFor="name">Name</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                placeholder="Name"
                                className="w-full border border-gray-300 rounded-md px-3 py-2"
                                required
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block mb-2" htmlFor="email">Email</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                placeholder="Email"
                                className="w-full border border-gray-300 rounded-md px-3 py-2"
                                required
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block mb-2" htmlFor="password">Photo URL</label>
                            <input
                                type="text"
                                id="photo"
                                name="photo"
                                placeholder="Photo URL"
                                className="w-[600px] border border-gray-300 rounded-md px-3 py-2"
                                required
                            />
                        </div>
                        <button type="submit" className="bg-orange-500 text-white px-4 py-2 rounded-md hover:bg-black">
                            Save Changes
                        </button>
                    </form>
                </div>

            </div>
        </div>
    );
};

export default UpdateProfile;