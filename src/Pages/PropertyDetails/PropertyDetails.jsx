import { Link, useLoaderData, useParams } from "react-router-dom";
import Navbar from "../Shared/Navbar/Navbar";
import { Helmet } from "react-helmet-async";
// import Navbar from "../Shared/Navbar/Navbar";

const PropertyDetails = () => {
    const properties = useLoaderData();
    const { id } = useParams();
    const propertyIdInt = parseInt(id);
    const property = properties.find(property => property.id === propertyIdInt);

    return (
        <div className="container mx-auto">
            <Helmet>
                <title>Elite Estate | Estate Details {id}</title>
            </Helmet>
            <Navbar></Navbar>
            <div className="lg:flex gap-16 mb-10 mt-10 ml-4 bg-orange-50 p-5">
                <div className="bg-slate-100 p-5">
                <img className="h-auto lg:w-full lg:h-[500px] rounded-lg" src={property.image} alt="" />

                </div>
                <div>
                    <p className="text-4xl font-bold text-orange-500">{property.estate_title}</p>
                    <hr className="my-6 border-gray-300" />
                    <p className="text-lg">{property.description}</p>
                    <hr className="my-6 border-gray-300" />
                    <div className="mb-7">
                        <p className="font-bold">Location:</p>
                        <p className="text-2xl font-bold ">{property.location}</p>
                    </div>
                    <div className="flex gap-5 mb-7">
                        <p className="font-bold">Facilities:</p>
                        <div className="flex items-center gap-2 flex-wrap">
                            {property.facilities.map((tag, index) => (
                                <span key={index} className="inline-block border bg-orange-500 text-white rounded-md px-2 py-1  mb-2 text-sm">
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </div>
                    <hr className="my-6 border-gray-300" />
                    <p className="text-lg">
                        <span className="font-bold">Status:</span> <span className="bg-green-500 px-6 py-1 rounded-md text-xl font-bold text-white">{property.status}</span>
                    </p>
                    <p className="text-lg">
                        <span className="font-bold">Area:</span> {property.area}
                    </p>
                    <p className="text-lg">
                        <span className="font-bold">Type:</span> {property.segment_name}
                    </p>
                    <h1 className="my-10 text-3xl font-bold">Price: {property.price}</h1>
                    <Link to='/'><button className="btn bg-orange-500 text-white font-bold">Go back</button></Link>
                </div>

            </div>
        </div>
    );
};

export default PropertyDetails;
