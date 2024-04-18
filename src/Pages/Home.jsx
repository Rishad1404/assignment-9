
import { Helmet } from "react-helmet-async";
import Banner from "./Banner/Banner";
import GetInTouch from "./Home/GetInTouch";
import HelpSection from "./Home/HelpSection";
import PropertyCards from "./Home/PropertyCards";
import Navbar from "./Shared/Navbar/Navbar";

const Home = () => {
    
    return (
        <div className="container mx-auto">
            <Helmet>
                <title> Home</title>
            </Helmet>
            <Navbar></Navbar>
            <Banner></Banner>
            <PropertyCards></PropertyCards>
            <HelpSection></HelpSection>
            <GetInTouch></GetInTouch>
        </div>
    );
};

export default Home;