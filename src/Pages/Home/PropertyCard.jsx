import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const PropertyCard = ({ properties }) => {
    const { id,estate_title, segment_name, price, status, area, location, facilities, image } = properties;

    return (
        <div className=" rounded overflow-hidden shadow-lg">
            <img className="h-[200px] lg:h-[300px] w-full" src={image} alt={estate_title} />
            <div className="px-6 py-4">
                <div className="font-bold text-2xl text-orange-500 mb-2">{estate_title}</div>
                <p className="text-gray-700 font-bold text-xl mb-4">
                    {segment_name} | <span className='bg-orange-500 px-5 py-1 text-white rounded-lg'>{status}</span>
                </p>
                <p className="text-gray-700 mb-3 text-xl">Price: <span className='font-bold text-xl bg-orange-500 text-white p-1 rounded-md'>{price}</span></p>
                <p className="text-gray-700 mb-3  text-xl">Area: <span className='font-bold text-xl bg-orange-500 text-white p-1 rounded-md'>{area}</span></p>
                <p className="text-gray-700 mb-3  text-xl">Location: <span className='font-bold text-xl bg-orange-500 text-white p-1 rounded-md'>{location}</span></p>
                <p className="text-gray-700 text-xl">Facilities: </p>

                <ul className="list-disc pl-4 ml-20 font-bold">
                    {facilities.map((facility, index) => (
                        <li key={index}>{facility}</li>
                    ))}
                </ul>
            </div>
            <Link to={`/property/${id}`}>
                <div className="px-6 py-4">
                    <button className="bg-orange-500 hover:bg-slate-400 text-white font-bold py-2 px-4 rounded w-full ">
                        View Details
                    </button>
                </div>
            </Link>
        </div>
    );
};

PropertyCard.propTypes = {
    properties: PropTypes.object.isRequired,
};

export default PropertyCard;
