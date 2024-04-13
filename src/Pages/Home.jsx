import {useLoaderData} from 'react-router-dom'
import Banner from "./Banner/Banner";
import Navbar from "./Shared/Navbar/Navbar";

const Home = () => {
    const properties=useLoaderData()
    console.log(properties)
    return (
        <div className="container mx-auto">
            <Navbar></Navbar>
            <Banner></Banner>
        </div>
    );
};

export default Home;