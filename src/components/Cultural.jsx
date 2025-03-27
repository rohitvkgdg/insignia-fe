import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from "axios";
import Card from './ui/Card';

function Cultural() {
    const [data, setData] = useState([]);

    useEffect(() => {
        api.get("/api/v1/events?cid=3")
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

export default Cultural;
