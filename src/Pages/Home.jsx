
import Banner from "./Banner/Banner";
import PropertyCards from "./Home/PropertyCards";
import Navbar from "./Shared/Navbar/Navbar";

const Home = () => {
    
    return (
        <div className="container mx-auto">
            <Navbar></Navbar>
            <Banner></Banner>
            <PropertyCards></PropertyCards>
        </div>
    );
};

export default Home;