/* eslint-disable react/no-unescaped-entities */
import Navbar from "../Shared/Navbar/Navbar";

const Feature = () => {
    return (
        <div className="container mx-auto">
            <Navbar></Navbar>
            {/* Offers */}
            <div className="container mx-auto px-4 py-16 my-10  md:px-24 lg:px-8 lg:py-20 dark:bg-gray-100 dark:text-gray-800">
                <h2 className="mb-8 text-4xl text-orange-500 leading-none text-center font-bold">What do we have to offer?</h2>
                <ul className="grid gap-3 md:grid-cols-2 lg:grid-cols-3 lg:ml-52">
                    <li className="flex items-center space-x-2">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-5 h-5 fill-current dark:text-orange-500">
                            <path d="M426.072,86.928A238.75,238.75,0,0,0,88.428,424.572,238.75,238.75,0,0,0,426.072,86.928ZM257.25,462.5c-114,0-206.75-92.748-206.75-206.75S143.248,49,257.25,49,464,141.748,464,255.75,371.252,462.5,257.25,462.5Z"></path>
                            <polygon points="221.27 305.808 147.857 232.396 125.23 255.023 221.27 351.063 388.77 183.564 366.142 160.937 221.27 305.808"></polygon>
                        </svg>
                        <span>Property Listings</span>
                    </li>
                    <li className="flex items-center space-x-2">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-5 h-5 fill-current dark:text-orange-500">
                            <path d="M426.072,86.928A238.75,238.75,0,0,0,88.428,424.572,238.75,238.75,0,0,0,426.072,86.928ZM257.25,462.5c-114,0-206.75-92.748-206.75-206.75S143.248,49,257.25,49,464,141.748,464,255.75,371.252,462.5,257.25,462.5Z"></path>
                            <polygon points="221.27 305.808 147.857 232.396 125.23 255.023 221.27 351.063 388.77 183.564 366.142 160.937 221.27 305.808"></polygon>
                        </svg>
                        <span>Featured Properties </span>
                    </li>
                    <li className="flex items-center space-x-2">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-5 h-5 fill-current dark:text-orange-500">
                            <path d="M426.072,86.928A238.75,238.75,0,0,0,88.428,424.572,238.75,238.75,0,0,0,426.072,86.928ZM257.25,462.5c-114,0-206.75-92.748-206.75-206.75S143.248,49,257.25,49,464,141.748,464,255.75,371.252,462.5,257.25,462.5Z"></path>
                            <polygon points="221.27 305.808 147.857 232.396 125.23 255.023 221.27 351.063 388.77 183.564 366.142 160.937 221.27 305.808"></polygon>
                        </svg>
                        <span>Buying Guides and Tips</span>
                    </li>
                    <li className="flex items-center space-x-2">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-5 h-5 fill-current dark:text-orange-500">
                            <path d="M426.072,86.928A238.75,238.75,0,0,0,88.428,424.572,238.75,238.75,0,0,0,426.072,86.928ZM257.25,462.5c-114,0-206.75-92.748-206.75-206.75S143.248,49,257.25,49,464,141.748,464,255.75,371.252,462.5,257.25,462.5Z"></path>
                            <polygon points="221.27 305.808 147.857 232.396 125.23 255.023 221.27 351.063 388.77 183.564 366.142 160.937 221.27 305.808"></polygon>
                        </svg>
                        <span>Free and MIT licensed</span>
                    </li>
                    <li className="flex items-center space-x-2">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-5 h-5 fill-current dark:text-orange-500">
                            <path d="M426.072,86.928A238.75,238.75,0,0,0,88.428,424.572,238.75,238.75,0,0,0,426.072,86.928ZM257.25,462.5c-114,0-206.75-92.748-206.75-206.75S143.248,49,257.25,49,464,141.748,464,255.75,371.252,462.5,257.25,462.5Z"></path>
                            <polygon points="221.27 305.808 147.857 232.396 125.23 255.023 221.27 351.063 388.77 183.564 366.142 160.937 221.27 305.808"></polygon>
                        </svg>
                        <span>Neighborhood Guides</span>
                    </li>
                    <li className="flex items-center space-x-2">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-5 h-5 fill-current dark:text-orange-500">
                            <path d="M426.072,86.928A238.75,238.75,0,0,0,88.428,424.572,238.75,238.75,0,0,0,426.072,86.928ZM257.25,462.5c-114,0-206.75-92.748-206.75-206.75S143.248,49,257.25,49,464,141.748,464,255.75,371.252,462.5,257.25,462.5Z"></path>
                            <polygon points="221.27 305.808 147.857 232.396 125.23 255.023 221.27 351.063 388.77 183.564 366.142 160.937 221.27 305.808"></polygon>
                        </svg>
                        <span>Virtual Tours and Media </span>
                    </li>
                </ul>
            </div>
            {/* All the features */}
            <div className="dark:bg-gray-100 dark:text-gray-800 container mx-auto my-10">
                <div className="px-4 py-16 mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="max-w-3xl mx-auto text-center">
                        <h2 className="text-3xl font-extrabold sm:text-4xl text-orange-500">All the features you want</h2>
                        <p className="mt-4 text-lg dark:text-gray-600">These are the features that you want from our website</p>
                    </div>
                    <dl className="mt-12 space-y-10 sm:space-y-0 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:gap-y-12 lg:grid-cols-4 lg:gap-x-8">
                        <div className="flex">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true" className="flex-shrink-0 w-6 h-6 dark:text-orange-500">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                            </svg>
                            <div className="ml-3">
                                <dt className="text-lg font-medium">Property Listings:</dt>
                                <dd className="mt-2 dark:text-gray-600">This is the core feature of your website, where users can browse through various properties available for sale. Organize listings by location, price range, property type (house, apartment, commercial space, etc.), and other relevant filters.</dd>
                            </div>
                        </div>
                        <div className="flex">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true" className="flex-shrink-0 w-6 h-6 dark:text-orange-500">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                            </svg>
                            <div className="ml-3">
                                <dt className="text-lg font-medium">Featured Properties:</dt>
                                <dd className="mt-2 dark:text-gray-600">Highlight a selection of premium or newly added properties to catch the attention of visitors. These could be properties with unique features, prime locations, or attractive pricing.</dd>
                            </div>
                        </div>
                        <div className="flex">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true" className="flex-shrink-0 w-6 h-6 dark:text-orange-500">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                            </svg>
                            <div className="ml-3">
                                <dt className="text-lg font-medium">Buying Guides and Tips</dt>
                                <dd className="mt-2 dark:text-gray-600">Provide valuable resources to help buyers navigate the purchasing process. This could include articles on understanding real estate markets, financing options, legal considerations, and tips for first-time buyers.</dd>
                            </div>
                        </div>
                        <div className="flex">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true" className="flex-shrink-0 w-6 h-6 dark:text-orange-500">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                            </svg>
                            <div className="ml-3">
                                <dt className="text-lg font-medium">Neighborhood Guides</dt>
                                <dd className="mt-2 dark:text-gray-600">Offer insights into different neighborhoods or areas where properties are listed. Include information about local amenities, schools, transportation, and the overall lifestyle to help buyers make informed decisions about where they want to live.</dd>
                            </div>
                        </div>
                        <div className="flex">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true" className="flex-shrink-0 w-6 h-6 dark:text-orange-500">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                            </svg>
                            <div className="ml-3">
                                <dt className="text-lg font-medium">Virtual Tours and Media</dt>
                                <dd className="mt-2 dark:text-gray-600">Enhance the browsing experience by offering virtual tours, high-quality images, and videos of properties. This allows potential buyers to get a better sense of the space before scheduling an in-person viewing.</dd>
                            </div>
                        </div>
                        <div className="flex">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true" className="flex-shrink-0 w-6 h-6 dark:text-orange-500">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                            </svg>
                            <div className="ml-3">
                                <dt className="text-lg font-medium">Real Estate News and Market Trends:</dt>
                                <dd className="mt-2 dark:text-gray-600">Keep users informed about the latest developments in the real estate industry, including market trends, property value fluctuations, regulatory changes, and tips for investment opportunities. This can help establish your website as a trusted source of information within the real estate community.</dd>
                            </div>
                        </div>
                        <div className="flex">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true" className="flex-shrink-0 w-6 h-6 dark:text-orange-500">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                            </svg>
                            <div className="ml-3">
                                <dt className="text-lg font-medium">Property Valuation Tools</dt>
                                <dd className="mt-2 dark:text-gray-600"> Provide tools or resources that help users estimate the value of their current property or the properties they're interested in purchasing. This could include online calculators, guides on factors that influence property value, and information on recent sales in the area.</dd>
                            </div>
                        </div>
                        <div className="flex">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true" className="flex-shrink-0 w-6 h-6 dark:text-orange-500">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                            </svg>
                            <div className="ml-3">
                                <dt className="text-lg font-medium">Investment Opportunities</dt>
                                <dd className="mt-2 dark:text-gray-600"> Highlight properties that offer potential for investment, such as rental properties, commercial spaces, or properties in up-and-coming neighborhoods. Offer insights into rental yields, potential appreciation, and strategies for real estate investment to attract buyers looking to build wealth through property ownership.</dd>
                            </div>
                        </div>
                    </dl>
                </div>
            </div>
            {/* Blogs */}
            <section className="dark:bg-gray-100 dark:text-gray-800 my-10 container mx-auto">
                <div className="text-center py-10">
                <h2 className="text-4xl font-extrabold text-orange-500 my-3">Blogs</h2>
                <p className="mx-4">Unlocking the Door to Real Estate Wisdom: Your Source for Insights, Tips, and Trends</p>
                </div>
                <div className="container max-auto p-6 mx-auto space-y-6 sm:space-y-12">
                    <a rel="noopener noreferrer" href="#" className="block max-w-sm gap-3 mx-auto sm:max-w-full group hover:no-underline focus:no-underline lg:grid lg:grid-cols-12 dark:bg-gray-50">
                        <img src="https://i.imgur.com/e0VadQ6.jpeg" alt="" className="object-cover lg:ml-20 w-auto md:w-[400px] lg:w-[700px] h-64 rounded sm:h-96 lg:col-span-7 dark:bg-gray-500" />
                        <div className="p-6 space-y-2 lg:col-span-5">
                            <h3 className="text-2xl font-semibold sm:text-4xl group-hover:underline group-focus:underline">Maximizing Your Property's Value: Expert Tips and Strategies</h3>
                            <span className="text-xs dark:text-gray-600">February 19, 2021</span>
                            <p>Learn actionable tips and strategies from real estate professionals on how to increase the value of your property. From small renovations to strategic marketing techniques, discover how to get the most out of your investment.</p>
                        </div>
                    </a>
                    <div className="grid justify-center grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                        <a rel="noopener noreferrer" href="#" className="max-w-sm mx-auto group hover:no-underline focus:no-underline dark:bg-gray-50">
                            <img role="presentation" className="object-cover w-full rounded h-44 dark:bg-gray-500" src="https://i.imgur.com/eursh10.jpeg" />
                            <div className="p-6 space-y-2">
                                <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">Navigating the Real Estate Market: Trends and Insights for Buyers and Sellers</h3>
                                <span className="text-xs dark:text-gray-600">January 21, 2021</span>
                                <p>Stay ahead of the curve with our in-depth analysis of current real estate market trends. Whether you're buying or selling, our insights and expert opinions will help you make informed decisions in today's dynamic market.</p>
                            </div>
                        </a>
                        <a rel="noopener noreferrer" href="#" className="max-w-sm mx-auto group hover:no-underline focus:no-underline dark:bg-gray-50">
                            <img role="presentation" className="object-cover w-full rounded h-44 dark:bg-gray-500" src="https://i.imgur.com/TYqjIhE.jpeg" />
                            <div className="p-6 space-y-2">
                                <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">The Ultimate Guide to First-Time Homebuying: Tips, Pitfalls, and Everything You Need to Know</h3>
                                <span className="text-xs dark:text-gray-600">January 22, 2021</span>
                                <p>Buying your first home can be both exciting and daunting. Our comprehensive guide covers everything from securing financing to negotiating the best deal. Arm yourself with the knowledge you need to confidently step into homeownership.</p>
                            </div>
                        </a>
                        <a rel="noopener noreferrer" href="#" className="max-w-sm mx-auto group hover:no-underline focus:no-underline dark:bg-gray-50">
                            <img role="presentation" className="object-cover w-full rounded h-44 dark:bg-gray-500" src="https://i.imgur.com/ePSNtEn.jpeg" />
                            <div className="p-6 space-y-2">
                                <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">Exploring Neighborhoods: Insider's Guide to Finding Your Perfect Community</h3>
                                <span className="text-xs dark:text-gray-600">January 23, 2021</span>
                                <p>Finding the right neighborhood is just as important as finding the right home. Discover hidden gems, local hotspots, and essential amenities in our insider's guide to different neighborhoods. Find the perfect community that fits your lifestyle and preferences.</p>
                            </div>
                        </a>
                        <a rel="noopener noreferrer" href="#" className="max-w-sm mx-auto group hover:no-underline focus:no-underline dark:bg-gray-50 hidden sm:block">
                            <img role="presentation" className="object-cover w-full rounded h-44 dark:bg-gray-500" src="https://i.imgur.com/WFzCOA1.jpeg" />
                            <div className="p-6 space-y-2">
                                <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">Virtual Tours 101: How to Virtually Explore Properties Like a Pro</h3>
                                <span className="text-xs dark:text-gray-600">January 24, 2021</span>
                                <p>Virtual tours have become an essential tool for homebuyers in today's digital age. Learn how to make the most out of virtual tours, from navigating 3D walkthroughs to spotting potential red flags. Take the guesswork out of property hunting with our expert tips.</p>
                            </div>
                        </a>
                        <a rel="noopener noreferrer" href="#" className="max-w-sm mx-auto group hover:no-underline focus:no-underline dark:bg-gray-50 hidden sm:block">
                            <img role="presentation" className="object-cover w-full rounded h-44 dark:bg-gray-500" src="https://i.imgur.com/7WLgPsM.jpeg" />
                            <div className="p-6 space-y-2">
                                <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">Investing in Real Estate: Strategies for Building Wealth through Property Ownership</h3>
                                <span className="text-xs dark:text-gray-600">January 25, 2021</span>
                                <p>Real estate investment can be a lucrative wealth-building strategy when done right. Our blog explores different investment opportunities, from rental properties to fix-and-flip projects. Gain valuable insights and expert advice to kickstart your real estate investment journey.</p>
                            </div>
                        </a>
                        <a rel="noopener noreferrer" href="#" className="max-w-sm mx-auto group hover:no-underline focus:no-underline dark:bg-gray-50 hidden sm:block">
                            <img role="presentation" className="object-cover w-full rounded h-44 dark:bg-gray-500" src="https://i.imgur.com/v24zZ6Q.jpeg" />
                            <div className="p-6 space-y-2">
                                <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">The Future of Real Estate: Trends Shaping the Industry in 2024 and Beyond</h3>
                                <span className="text-xs dark:text-gray-600">January 26, 2021</span>
                                <p>What does the future hold for the real estate industry? From technological innovations to evolving consumer preferences, our blog dives into the trends shaping the real estate landscape in 2024 and beyond. Stay informed and prepare for the future of real estate.</p>
                            </div>
                        </a>
                    </div>
                    <div className="flex justify-center">
                        <button type="button" className="px-6 py-3 text-sm rounded-md hover:underline dark:bg-gray-50 dark:text-gray-600">Load more posts...</button>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Feature;