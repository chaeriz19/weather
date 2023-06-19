import React , { useState }from "react";
import Footer from "../footer.jsx";
import Header from "../header.jsx";
import Main from "../main.jsx";
import '../main/home.css'

export default function Home() {
    const [loading, setLoading] = useState(false);
    // Return all components relevant to Home
    return (
        <div>


                <Header />
                <Main />
                <Footer />
            
        </div>
    )
}