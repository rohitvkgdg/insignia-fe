import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';

function BranchEvents() {
    const { branchId } = useParams();
    const [events, setEvents] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        console.log("Fetching events for branch:", branchId); // Debugging log

        api.get(`api/v1/branches/${branchId}`)
            .then(res => {
                console.log("Fetched Events:", res.data);
                setEvents(res.data);
                setLoading(false);
            })
            .catch(err => {
                console.error("API Error:", err);
                setError("Failed to load events.");
                setLoading(false);
            });
    }, [branchId]);

    if (loading) return <p>Loading events...</p>;
    if (error) return <p>{error}</p>;
    if (events.length === 0) return <p>No events available for this branch.</p>;

    return (
        <div className="p-8">
            <h1 className="text-2xl font-bold mb-4">Events in this Branch</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {events.map(event => (
                    <Link key={event.EID} to={`/event/${event.EID}`} className="no-underline">
                        <div className="bg-white shadow-lg rounded-lg p-4">
                            <img src={event.poster_link} alt={event.ENAME} className="w-full h-48 object-cover rounded-lg" />
                            <h2 className="text-xl font-semibold mt-2">{event.ENAME}</h2>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
}

export default BranchEvents;
