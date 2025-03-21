import React from 'react';
import Card from './ui/Card';
import { Link } from 'react-router-dom';

function Home() {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 justify-center p-8">
           <Link to="/Centralized">
           <Card name="Centralized" />
           </Link>
         
           
           <Link to="/Branch">
           <Card name="Branch" />
           </Link>

            <Link to="/Cultural">
            <Card name="Cultural" />
           </Link>
            
        </div>
    );
}

export default Home;
