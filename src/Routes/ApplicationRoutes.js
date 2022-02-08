import React from 'react';
import {Routes, Route} from "react-router-dom";
import HomePage from "../Pages/HomePage";
import BlogCreatePage from "../Pages/BlogCreatePage";

const ApplicationRoutes = () => {
    return <>
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/createblog" element={<BlogCreatePage />} />
        </Routes>
    </>
}

export default ApplicationRoutes;