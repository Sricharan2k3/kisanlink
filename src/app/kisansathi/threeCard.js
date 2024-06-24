import React from 'react';

const Card = () => {
    return (
        <div className="flex justify-center items-center min-h-screen">
            <div className="flex justify-between w-3/4">
                {/* Card 1 */}
                <div className=" rounded-lg overflow-hidden w-1/3 m-4 flex flex-col">
                    <div className="p-4">
                        <h3 className="text-xl font-bold mb-2">Card 1</h3>
                    </div>
                    <img src="https://www.kisanlink.in/wp-content/uploads/2022/03/Felxible-time.png" alt="Card 1" className="w-24 h-24 object-cover" />
                    <div className="p-4">
                        <p>This is the content for card 1.</p>
                    </div>
                </div>

                {/* Card 2 */}
                <div className=" rounded-lg overflow-hidden w-1/3 m-4 flex flex-col">
                    <div className="p-4">
                        <h3 className="text-xl font-bold mb-2">Card 2</h3>
                    </div>
                    <img src="https://www.kisanlink.in/wp-content/uploads/2022/03/unlimites-income.png" alt="Card 2" className="w-24 h-24" />
                    <div className="p-4">
                        <p>This is the content for card 2.</p>
                    </div>
                </div>

                {/* Card 3 */}
                <div className="rounded-lg overflow-hidden w-1/3 m-4 flex flex-col">
                    <div className="p-4">
                        <h3 className="text-xl font-bold mb-2">Card 3</h3>
                    </div>
                    <img src="https://www.kisanlink.in/wp-content/uploads/2022/03/certifications.png" alt="Card 3" className="w-24 h-24 object-cover" />
                    <div className="p-4">
                        <p>This is the content for card 3.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Card;
