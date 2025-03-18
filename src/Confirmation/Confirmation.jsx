import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

function Confirmation() {
    const location = useLocation();
    const navigate = useNavigate();

    // ✅ Retrieve data passed from Register page
    const { eventName, regCode, name} = location.state || {};
    if (!eventName || !regCode || !name ) {
        return <h2 className="text-red-500 text-center">Invalid Registration. Please try again.</h2>;
    }

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <p className='text-2xl font-bold mb-4'>THANK YOU </p>
                {/* {console.log(name)}  */}
                <h2 className="text-2xl font-bold text-green-600 font-bold">{name}</h2>
                <h2 className="text-2xl font-bold mb-4">Registration Successful! 🎉</h2>
                <p className="text-lg">You have registered for:</p>
                <h3 className="text-xl font-semibold text-orange-500">{eventName}</h3>
                <p className="text-lg mt-2">Your Unique ID:</p>
                <p className="text-2xl font-bold text-green-600">{regCode}</p>
                

                <button 
                    onClick={() => navigate('/')} 
                    className="mt-4 px-4 py-2 bg-blue-500 text-white rounded"
                >
                    Go to Home
                </button>
            </div>
        </div>
    );
}

export default Confirmation;
