import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CreateBlog from "../CreateBlog";
import DetailBlog from "../DetailBlog";
import Home from "../Home";

const MainApp = () => {
    return (
        <div>
            <p>Header</p>
            <Router>
                <Routes>
                    <Route path="/create-blog" element={<CreateBlog />} />
                    <Route path="/detail-blog" element={<DetailBlog />} />
                    <Route path="/" element={<Home />}></Route>
                </Routes>
            </Router>
            <p>Footer</p>
        </div>
    );
};

export default MainApp;
