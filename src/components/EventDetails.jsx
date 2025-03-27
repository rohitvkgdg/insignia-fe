import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { Link } from 'react-router-dom';
function EventDetails() {
    const { eventId } = useParams(); 
    const [event, setEvent] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        api.get(`/api/v1/events/${eventId}`)
            .then(res => {
                console.log("Event Data:", res.data); 
                setEvent(res.data); 
                setLoading(false);
            })
            .catch(err => {
                console.log("API Error:", err);
                setError("Failed to load event details.");
                setLoading(false);
            });
    }, [eventId]);

    if (loading) return <p>Loading event details...</p>;
    if (error) return <p>{error}</p>;
    if (!event) return <p>Event not found.</p>;

    return (
        <div className="p-8 bg-orange-100 rounded-lg shadow-lg flex">
            <img src={event.poster_link} alt={event.ENAME} className="w-1/3 rounded-lg" />
            <div className="ml-6">
                <h1 className="text-2xl font-bold">{event.ENAME}</h1>
                <p><strong>Venue:</strong> {event.venue} | <strong>Time:</strong> {event.Timing}</p>
                <p><strong>Date:</strong> {event.DATEE.split("T")[0]}</p>
                <p><strong>Rules:</strong></p>
                <ul className="list-disc pl-5">
                    {event.rules.split("\n").map((rule, index) => (
                        <li key={index}>{rule}</li>
                    ))}
                </ul>
                <p><strong>Price:</strong> ₹{event.price}</p>
                <p><strong>Coordinators:</strong> {event.coordinator1} - {event.c1phone}, {event.coordinator2} - {event.c2phone}</p>
                <div className='my-4'>
                <Link to={`/register/${event.EID}`} className="mt-5 px-4 py-3 bg-orange-500 text-white rounded-lg">
    REGISTER
</Link>
                </div>
            </div>
        </div>
    );
}

export default EventDetails;
