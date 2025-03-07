import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Terms = () => {
  return (
    <div>
      <Navbar />
      <div className="font-poppins pb-10">
        <h2 className="text-4xl text-[#333] font-medium text-center py-12">
          Terms & Conditions
        </h2>
        <div className="max-w-screen-lg mx-auto text-base tracking-wider px-4 flex flex-col gap-5">
          <p>
            Welcome to JobsMentor. By accessing or using our website, you agree
            to comply with these Terms and Conditions. These terms govern your
            use of JobsMentor’s services, content, and features. If you do not
            agree with these terms, please refrain from using our platform.
          </p>

          <p>
            JobsMentor is a company review website designed to help users share
            and access information about various organizations. While we strive
            to ensure the accuracy and reliability of the content on our
            platform, we do not guarantee its completeness, correctness, or
            suitability for any purpose. The views expressed in user-generated
            content are solely those of the contributors and do not represent
            the opinions of JobsMentor.
          </p>

          <p>
            By using JobsMentor, you agree to create an account with accurate
            and up-to-date information. You are responsible for maintaining the
            confidentiality of your account credentials and for all activities
            conducted under your account. JobsMentor reserves the right to
            suspend or terminate accounts found to be in violation of these
            terms.
          </p>

          <p>
            You may not use JobsMentor for any unlawful or unauthorized
            purposes. Prohibited activities include but are not limited to
            posting defamatory, abusive, or misleading content; using automated
            tools to access or scrape data; and engaging in activities that
            could harm the integrity of our platform or other users. All content
            on JobsMentor, including reviews, ratings, text, graphics, and other
            materials, is protected by intellectual property laws. You may
            access this content for personal, non-commercial purposes.
            Unauthorized reproduction, distribution, or modification of
            JobsMentor content is strictly prohibited.
          </p>

          <p>
            By submitting reviews, ratings, or other content to JobsMentor, you
            grant us a worldwide, royalty-free, perpetual license to use,
            reproduce, adapt, publish, and distribute your content in connection
            with our services. You retain ownership of your content but agree
            that it complies with all applicable laws and does not infringe the
            rights of any third party.
          </p>

          <p>
            JobsMentor may contain links to third-party websites or resources.
            We are not responsible for the availability, content, or practices
            of these external sites. Users are encouraged to review the terms
            and conditions of third-party websites before engaging with them.
          </p>

          <p>
            We reserve the right to modify or update these Terms and Conditions
            at any time. Changes will be posted on this page, and continued use
            of JobsMentor after such updates signifies your acceptance of the
            revised terms. Users are encouraged to review this page periodically
            to stay informed.
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Terms;
