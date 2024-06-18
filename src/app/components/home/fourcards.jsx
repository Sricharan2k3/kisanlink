import React from 'react';
import Heading from '../heading';

const FourCards = () => {
    return (
        <>
            <Heading value={"Our Solutions To Farmers"} />

            <div className="flex justify-between mt-12">
                <div className="relative h-1/3 w-1/4 mx-2" style={{ backgroundColor: '#24A033' }}>
                    <div className=" overflow-hidden"style={{ backgroundColor: '#24A033' }} >
                        <div className="h-20 bg-cover bg-center" style={{ backgroundImage: 'url(https://www.kisanlink.in/wp-content/uploads/agrisetu.com_.png)' }}></div>
                        
                        <img src="https://www.kisanlink.in/wp-content/uploads/parcel.png" alt="Card 1" className="w-40 h-40 p-4" />
                        
                        <div className="p-4 relative" style={{ backgroundColor: '#24A033' }}>
                            <h2 className="text-white text-2xl font-bold mb-2 font-poppins">Products</h2>
                            <br />
                            <p className="text-white font-poppins">

                                We provide Agri Inputs and the latest equipment and machinery to farmers at their
                                doorstep, enabling them to
                                improve their yield.</p>
                            <br />
                            <br />
                            <br />
                            <br/>

                            
                        </div>
                    </div>
                    <a href="/page1" className="absolute bottom-4 right-4 bg-white text-green-500 rounded-full p-2">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd" d="M9.293 4.293a1 1 0 0 1 1.414 0l5 5a1 1 0 0 1 0 1.414l-5 5a1 1 0 0 1-1.414-1.414L13.586 11H4a1 1 0 1 1 0-2h9.586L9.293 5.707a1 1 0 0 1 0-1.414z" />
                                </svg>
                            </a>
                </div>
                <div className="relative w-1/4 mx-2" style={{ backgroundColor: '#24A033' }}>
                    <div className=" overflow-hidden" style={{ backgroundColor: '#24A033' }}>
                        <div className="h-20 bg-cover bg-center" style={{ backgroundImage: 'url(https://www.kisanlink.in/wp-content/uploads/agrisetu.com_.png)' }}></div>
                        <img src="https://www.kisanlink.in/wp-content/uploads/drone-3.png" alt="Card 1" className="w-40 h-40 p-4" />
                        <div className="p-4 relative" style={{ backgroundColor: '#24A033' }}>
                            <h2 className="text-white text-2xl font-bold mb-2 font-poppins">Farm Mechanization Service</h2>
                            <br />
                            <p className="text-white font-poppins">
                                We facilitate farm
                                mechanization services such
                                as drone service etc.</p>
                            <br />
                            <br />
                            <br />
                            <br />
                            
                        </div>
                    </div>
                    <a href="/page1" className="absolute bottom-4 right-4 bg-white text-green-500 rounded-full p-2">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd" d="M9.293 4.293a1 1 0 0 1 1.414 0l5 5a1 1 0 0 1 0 1.414l-5 5a1 1 0 0 1-1.414-1.414L13.586 11H4a1 1 0 1 1 0-2h9.586L9.293 5.707a1 1 0 0 1 0-1.414z" />
                                </svg>
                            </a>
                </div>
                <div className="relative w-1/4 mx-2" style={{ backgroundColor: '#24A033' }}>
                    <div className=" overflow-hidden" style={{ backgroundColor: '#24A033' }}>
                        <div className="h-20 bg-cover bg-center" style={{ backgroundImage: 'url(https://www.kisanlink.in/wp-content/uploads/agrisetu.com_.png)' }}></div>
                        <img src="https://www.kisanlink.in/wp-content/uploads/pickup-truck.png" alt="Card 1" className="w-40 h-40 p-4" />
                        <div className="p-4 relative" style={{ backgroundColor: '#24A033' }}>
                            <h2 className="text-white text-2xl font-bold mb-2 font-poppins">Output Purchase Service</h2>
                            <br />

                            <p className="text-white font-poppins">We assist farmers in realizing better value through
                                our trading platform.</p>
                            <br />
                            <br />
                            <br />
                            <br />
                            
                        </div>
                    </div>
                    <a href="/page1" className="absolute bottom-4 right-4 bg-white text-green-500 rounded-full p-2">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd" d="M9.293 4.293a1 1 0 0 1 1.414 0l5 5a1 1 0 0 1 0 1.414l-5 5a1 1 0 0 1-1.414-1.414L13.586 11H4a1 1 0 1 1 0-2h9.586L9.293 5.707a1 1 0 0 1 0-1.414z" />
                                </svg>
                            </a>
                </div>
                <div className="relative w-1/4 mx-2 " style={{ backgroundColor: '#24A033' }}>
                    <div className=" overflow-hidden" style={{ backgroundColor: '#24A033' }}>
                        <div className="h-20 bg-cover bg-center" style={{ backgroundImage: 'url(https://www.kisanlink.in/wp-content/uploads/agrisetu.com_.png)' }}></div>
                        <img src="https://www.kisanlink.in/wp-content/uploads/industry.png" alt="Card 1" className="w-40 h-40 p-4" />
                        <div className="p-4 relative" style={{ backgroundColor: '#24A033' }}>
                            <h2 className="text-white text-2xl font-bold mb-2 font-poppins">Other Agri Related Services</h2>
                            <br />

                            <p className="text-white font-poppins">We also facilitate soil testing, advisory and government-
                                based services to farmers.</p>
                            <br />
                            <br />
                            <br />
                            <br />

                            
                        </div>
                    </div>
                    <a href="/page1" className="absolute bottom-4 right-4 bg-white text-green-500 rounded-full p-2 ">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd" d="M9.293 4.293a1 1 0 0 1 1.414 0l5 5a1 1 0 0 1 0 1.414l-5 5a1 1 0 0 1-1.414-1.414L13.586 11H4a1 1 0 1 1 0-2h9.586L9.293 5.707a1 1 0 0 1 0-1.414z" />
                                </svg>
                            </a>
                </div>
            </div>
        </>
    );
};

export default FourCards;
