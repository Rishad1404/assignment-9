
import { Helmet } from "react-helmet-async";
import PropertyCards from "../Home/PropertyCards";
import Navbar from "../Shared/Navbar/Navbar";
import {useLoaderData} from 'react-router-dom'
const Properties = () => {
    const properties=useLoaderData()
    console.log(properties)
    return (
        <div className="container mx-auto">
            <Helmet>
                <title>Properties</title>
            </Helmet>
            <Navbar></Navbar>
            <PropertyCards></PropertyCards>
        </div>
    );
};

export default Properties;