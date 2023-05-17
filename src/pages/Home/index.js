import React from "react";
import { Header } from "../../components";
import { Footer } from "../../components";
import "./home.scss";

const Home = () => {
    return (
        <div className="main-app-wrapper">
            <Header />
            <div className="content-wrapper">
                <p>Home Page</p>
            </div>
            <Footer /> 
        </div> 
    );
};

export default Home;
   