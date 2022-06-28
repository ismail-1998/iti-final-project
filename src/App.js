import React from "react";

import Navbar from "./components/Globals/Navbar";
import Home from "./components/Pages/Home/Home";
import AboutUs from "./components/Pages/About/AboutUs";
import Services from "./components/Pages/Serivces/Services";
import WeDo from "./components/Pages/WeDo/WeDo";
import OurTeam from "./components/Pages/OurTeam/OurTeam";
import OurWork from "./components/Pages/OurWork/OurWork";
import Reviews from "./components/Pages/Reviews/Reviews";
import Blogs from "./components/Pages/Blogs/Blogs";

import Footer from "./components/Globals/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <AboutUs />
      <Services />
      <WeDo />
      <OurTeam />
      <OurWork />
      <Reviews />
      <Blogs />
      <Footer />
    </>
  );
}

export default App;
