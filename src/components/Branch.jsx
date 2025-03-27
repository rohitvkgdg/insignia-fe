import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import api from '../utils/api'; // Adjust the import path as necessary

function Branch() {
    const [branches, setBranches] = useState([]);

    useEffect(() => {
        api.get("/api/v1/branches")
            .then(res => {
                console.log("Fetched Branches:", res.data);
                if (Array.isArray(res.data)) {
                    setBranches(res.data);
                } else {
                    console.error("Unexpected API Response:", res.data);
                }
            })
            .catch(err => console.error("API Error:", err));
    }, []);

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 justify-center p-8">
            {branches.length > 0 ? (
                branches.map(branch => (
                    <Link to={`/branches/${branch.bid}`} key={branch.bid} className="no-underline">
                        <div className="bg-white p-4 shadow-md rounded-lg">
                            <h2 className="text-xl font-semibold">{branch.bname}</h2>
                        </div>
                    </Link>
                ))
            ) : (
                <p>Loading branches...</p>
            )}
        </div>
    );
}

export default Branch;
