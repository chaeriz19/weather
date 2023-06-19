import React, { useState, useEffect } from 'react';
import Loading from './loading';
import '../style/home.css';
import App from './main/app.jsx';

// Main home page component
export default function Main() {

    const [ loading , setLoading ] = useState(false);
    
    useEffect(() => {
        setLoading(true);
        setInterval(() => {
            setLoading(false);
        }, 500);
        document.title = 'Home';
    }, []);
    return (
        <div>
            { loading 
            ? 
            <Loading /> 
            : (
                <App />
            )
            }
        </div>
        
    )
}