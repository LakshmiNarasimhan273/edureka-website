import React from "react";
import Navbar from "../components/Navbar";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home/Home";
import About from "../pages/About/About";
import Footer from "../pages/Home/Footer";
import Contact from "../pages/contact/Contact";
import Courses from "../pages/courses/Courses";
import FullStack from "../pages/courses/single-courses/FullStack";
import DataScience from "../pages/courses/single-courses/DataScience";
import Cloud from "../pages/courses/single-courses/Cloud";

function Router() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/courses" element={<Courses />} />
        {/* single courses */}
        <Route path="/full-stack" element={<FullStack />} />
        <Route path="/data-science" element={<DataScience />} />
        <Route path="/cloud" element={<Cloud />} />
      </Routes>
      <Footer />
    </>
  );
}

export default Router;
