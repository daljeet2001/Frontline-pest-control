import Image from "next/image";

import Navbar from "./components/navbar";
import Banner from "./components/banner";
import Header from "./components/Header";
import Services from "./components/services";
import AboutUs from "./components/aboutus";
import Locations from "./components/locations";
import ContactUs from "./components/contactus";
import Footer from "./components/footer";
import Pricing from "./components/pricing";
import Reviews from "./components/reviews";

export default function Home() {
  return (
    <div className="w-full">

      <Banner />
      <Navbar />
      <div id="header">
        <Header />
      </div>

      <div id="services">
        <Services />
      </div>

      <Locations />
      <div id="about">
        <AboutUs />
      </div>
      <div id="plans">
        <Pricing />
      </div>

      <Reviews />

      <div id="contact">
        <ContactUs />
      </div>

      <Footer />



    </div>
  );
}
