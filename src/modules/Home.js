import React from 'react'
import '../styles/Home.css'
import Cards from "../components/Cards";
import Buttons from "../components/Buttons";
import Credits from "../components/Credits";

const Home = () => (
    <div className="home">
        <Cards />
        <Buttons />
        <Credits />
    </div>
)

export default Home
