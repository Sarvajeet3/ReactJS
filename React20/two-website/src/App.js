import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import AppSection from "./AppSection";
import HeroSection from "./HeroSection";
import CardSection from "./CardSection";

const App = () => (
    <div>
        <Navbar/>
        <HeroSection/>
        <AppSection/>
        <CardSection/>
        <Footer/>
    </div>
)
export default App;