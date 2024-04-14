import PropTypes from 'prop-types';
const PropertyCard = ({properties}) => {
    const {estate_title,segment_name,price,status,area,location,facilities,image}=properties;
    return (
        <div className="card bg-base-100 border shadow-xl">
            <figure><img src={image} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{estate_title}</h2>
                <p>If a dog chews shoes whose shoes does he choose?</p>
                <div className="card-actions justify-end">
                    <button className="btn bg-orange-500 text-white">View Details</button>
                </div>
            </div>
        </div>
    );
};
PropertyCard.propTypes = {
    properties: PropTypes.object.isRequired,
};
export default PropertyCard;