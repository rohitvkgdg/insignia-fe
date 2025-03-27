import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Card from './ui/Card';
import api from '../utils/api'; // Adjust the import path as necessary

function Centralized() {
    const [data, setData] = useState([]);

    useEffect(() => {
        api.get("api/v1/events/1")
            .then(res => {
                console.log(res.data); // Debugging
                setData(res.data);
            })
            .catch(err => console.log("API Error:", err));
    }, []);

    return (
        <div style={{ display: "flex", gap: "30px", flexWrap: "wrap", justifyContent: "center" }}>
            {data.length > 0 ? (
                data.map((event) => (
                    <Link key={event.EID} to={`/event/${event.EID}`} className="no-underline">
                        <Card name={event.ENAME} price={event.price} image={event.poster_link} />
                    </Link>
                ))
            ) : (
                <p>Loading events...</p>
            )}
        </div>
    );
}

export default Centralized;
