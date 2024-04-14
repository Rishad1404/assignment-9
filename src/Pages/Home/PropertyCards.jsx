import {useLoaderData} from 'react-router-dom'
import PropertyCard from './PropertyCard';
const PropertyCards = () => {
    const properties=useLoaderData()
    console.log(properties)
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-24 mb-10'>
            {
                properties.map(property=><PropertyCard
                    key={property.id}
                    properties={property}
                ></PropertyCard>)
            }
        </div>
    );
};

export default PropertyCards;