import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";
import Home from "../pages/home/Home";
import About from "../pages/about/About";
import Projects from "../pages/projects/Projects";
import Contact from "../pages/contact/Contact";
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NotFound from "../components/Error/NotFound";

const Router = () => {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
};

export default Router;
