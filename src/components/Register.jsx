import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

function Register() {
    const { eventId } = useParams();
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        eventId: eventId
    });

    const [eventName, setEventName] = useState(""); // Store event name

    // ✅ Fetch event name when the page loads
    useEffect(() => {
        axios.get(`http://localhost:5173/events/${eventId}`)
            .then(response => {
                setEventName(response.data.ename); // Store event name
            })
            .catch(error => {
                console.error("Error fetching event:", error);
            });
    }, [eventId]);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:5173/register', formData)
        .then(response => {
            console.log("Backend Response:", response.data.Message);
            
            if (response.data.Message == true) {  // ✅ Trim whitespace
                const { regCode,eventName,eventId,name } = response.data;
                navigate(`/confirmation/${eventId}`, { state: { eventName, regCode,name} });
            } else {
                alert("Invalid registration, please try again.");
            }
        })
        .catch(error => {
            console.error("Error registering:", error);
            alert("Registration failed.");
        });
    
    };

    return (
        <div className="p-8">
            <h2 className="text-2xl font-bold mb-4">Register for {eventName}</h2>
            <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md">
                <input type="text" name="name" placeholder="Your Name" onChange={handleChange} className="block w-full p-2 mb-2 border rounded" required />
                <input type="email" name="email" placeholder="Email" onChange={handleChange} className="block w-full p-2 mb-2 border rounded" required />
                <input type="tel" name="phone" placeholder="Phone Number" onChange={handleChange} className="block w-full p-2 mb-2 border rounded" required />
                <button type="submit" className="bg-orange-500 text-white px-4 py-2 rounded">Submit</button>
            </form>
        </div>
    );
}

export default Register;
