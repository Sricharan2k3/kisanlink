import React from 'react';
const backgroundImage = 'drone.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import Heading from '../heading';

const FarmMechanization = () => {
    return (
        <>


            <div className='overflow-hidden'>
                <div className="h-full bg-cover bg-center" style={{ backgroundImage: `linear-gradient(to bottom, rgba(76, 175, 80, 0.6), rgba(139, 195, 74, 0.6)), url(${backgroundImage})` }}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 100" style={{ transform: 'rotate(180deg)' }}>
                        <path className="elementor-shape-fill" d="M500.2,34.7L0,0v100h1000V0L500.2,34.7z" fill="#FFFFFF"></path>
                    </svg>
                    <div className="flex items-center justify-center h-full">
                        <div className=" p-8 rounded-lg shadow-lg text-center">
                            <h1 className="text-4xl font-bold text-white mb-4">
                                Farm mechanization Solutions</h1>

                            <div className='w-[75%] mx-auto mt-7'>
                                <h3 className="text-lg text-white text-center">Our farm mechanization solutions offer farmers and growers innovative tools to optimize operations, enhance crop productivity, and improve efficiency. Our solutions range from supplying drone products and accessories to providing our customers with the best after-sale services.</h3>
                            </div>


                            <br />
                            <br /><br />
                            <button type="button" class="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-full text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">Explore <FontAwesomeIcon icon={faArrowRight} /></button><br /><br /><br /><br />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default FarmMechanization;
