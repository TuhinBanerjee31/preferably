import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Policy = () => {
  return (
    <div>
      <Navbar />
      <div className="font-poppins pb-10">
        <h2 className="text-4xl text-[#333] font-medium text-center py-12">
          Privacy Policy
        </h2>
        <div className="max-w-screen-lg mx-auto text-base tracking-wider px-4 flex flex-col gap-5">
          <p>
            Welcome to JobsMentor! Protecting your privacy is important to us.
            This Privacy Policy outlines how we collect, use, and safeguard your
            information when you use our website.
          </p>
          <p>
            We collect various types of information to improve your experience
            and ensure the functionality of our services. This includes personal
            information like your name, email address, and other contact details
            provided when you create an account or contact us. Additionally, we
            collect non-personal information such as your browser type, IP
            address, and website usage statistics through cookies and similar
            technologies. We also gather user-generated content like reviews and
            ratings that you choose to submit about companies.
          </p>
          <p>
            The information we collect is used to provide and improve our
            services, personalize your experience on JobsMentor, communicate
            updates or promotional offers, ensure the integrity of reviews, and
            comply with legal obligations. We take your privacy seriously and do
            not sell your personal information. However, we may share your data
            with your consent, with service providers who assist us in
            delivering our services, or when required by law. Non-personally
            identifiable information may also be shared for research and
            analytical purposes.
          </p>
          <p>
            You have rights regarding your personal information, including
            accessing and updating your details, requesting data deletion, and
            opting out of specific communications. To exercise these rights, you
            can contact us. Please note that JobsMentor may
            contain links to third-party websites, and we are not responsible
            for their privacy practices. We encourage you to review their
            policies before providing any information.
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Policy;
