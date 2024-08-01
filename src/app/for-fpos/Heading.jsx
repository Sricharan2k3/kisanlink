
import React from 'react';

const Heading = ({ value }) => {
    return (
        <div className="text-center mb-12 mt-24">
            <h1 className="text-1.5xl lg:text-2xl font-bold text-brown-700">
                {value}
            </h1>
        </div>
    )
}

export default Heading;
