import Slider from "../Home/Slider";
import { useRef } from "react";
import PropertyCards from "../Home/PropertyCards";

const Banner = () => {

    const propertyRef = useRef(null);

    const scrollToProperty = () => {
        if (propertyRef.current) {
            propertyRef.current.scrollIntoView({ behavior: "smooth" });
        }
    };


    return (
        <section>
            <Slider></Slider>
            <div className="dark:bg-orange-400 container mt-10 mx-auto">

                <div className="container flex flex-col items-center px-4 py-16 pb-24 mx-auto text-center lg:pb-56 md:py-32 md:px-10 lg:px-32 dark:text-gray-50">
                    <h1 className="text-5xl font-bold leading-none sm:text-6xl xl:max-w-3xl dark:text-gray-50">Unrivalled Elegance Awaits</h1>
                    <h2 className="mt-6 mb-8 text-lg sm:mb-12 xl:max-w-3xl dark:text-gray-50"> Explore Our Exclusive Estates!</h2>
                    <div className="flex flex-wrap justify-center">
                        <button  onClick={scrollToProperty} type="button" className="px-8 py-3 m-2 text-lg font-semibold rounded dark:bg-gray-100 dark:text-gray-900">Click Here</button>
                        <button  type="button" className="px-8 py-3 m-2 text-lg font-semibold rounded dark:bg-gray-100 dark:text-gray-900">Learn More</button>
                    </div>
                </div>
            </div>
            <img src="https://i.imgur.com/cFvbAaJ.jpeg" alt="" className="w-5/6 mx-auto mb-12 -mt-20 dark:bg-gray-500 rounded-lg shadow-md lg:-mt-40" />
            <div className="text-center bg-slate-300 p-10 my-10">
                <h1 className="text-6xl font-bold leading-none  text-black">Luxury Selections</h1>
                <h2 className="mt-6 text-2xl  text-black">  Find Your Perfect Estate!</h2>
            </div>
            <div ref={propertyRef}>
                <PropertyCards></PropertyCards>
            </div>
        </section>
    );
};

export default Banner; 