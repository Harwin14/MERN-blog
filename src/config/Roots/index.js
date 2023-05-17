import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home, Login, Register } from "../../pages";
import CreateBlog from "../../pages/CreateBlog";
import DetailBlog from "../../pages/DetailBlog";
const Roots = () => {
    return (
        <Router>
            <Routes>
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/" element={<Home />} />
                <Route path="/create-blog" element={<CreateBlog />} />
                <Route path="/detail-blog" element={<DetailBlog />} />
            </Routes>
        </Router>
    );
};

export default Roots;
