import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const About = () => {
  return (
    <div>
      <Navbar />
      <div className="font-poppins pt-10 pb-20">
        <div className="max-w-screen-lg mx-auto px-5">
          <h2 className="text-3xl text-[#333] font-medium text-center py-10 ">
            About
          </h2>

          <p className="text-lg tracking-wider">
            At JobsMentor, we believe that informed decisions pave the way to
            successful careers. Our platform is dedicated to providing in-depth,
            accurate, and up-to-date insights about companies across industries.
            Whether you're a job seeker, a student planning your career, or a
            professional exploring new opportunities, we aim to empower you with
            the knowledge you need to make the best choices.
          </p>

          <h4 className="text-lg font-medium pt-10">Mission</h4>

          <p className="text-lg tracking-wider">
            To bridge the gap between job seekers and employers by offering
            transparent and comprehensive company insights that inspire
            confident career decisions.
          </p>

          <h4 className="text-lg font-medium pt-10">What We Offer</h4>

          <p className="text-lg tracking-wider">
            At JobsMentor, we provide a comprehensive suite of resources to help
            you navigate the job market and make informed career decisions. Our
            detailed company profiles offer insights into organizations'
            histories, visions, work cultures, and achievements, along with key
            statistics such as size, locations, and global presence. To give you
            a clear picture of workplace dynamics, we compile employee reviews,
            ratings, and testimonials, highlighting benefits and growth
            opportunities. We also keep you informed about industry trends,
            covering emerging developments, market leaders, and sector-specific
            data. If you're actively seeking job opportunities, our platform
            showcases open positions and provides direct links to official job
            portals, helping you apply with confidence. Additionally, we support
            your interview preparation with company-specific insights, including
            common interview questions, processes, and recruiter expectations.
            With JobsMentor, you’re equipped with everything you need to succeed
            in your career journey.
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default About;
