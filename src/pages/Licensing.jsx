import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Licensing = () => {
  return (
    <div>
      <Navbar />
      <div className="font-poppins pb-10">
        <h2 className="text-4xl text-[#333] font-medium text-center py-12">
          Licensing
        </h2>
        <div className="max-w-screen-lg mx-auto text-base tracking-wider px-4 flex flex-col gap-5">
          <p>
            Welcome to the Licensing page of JobsMentor. This page outlines the
            terms and conditions governing the usage of the content, tools, and
            services provided on our platform. By accessing or using JobsMentor,
            you agree to comply with the licensing terms detailed below.
          </p>
          <p>
            All content, features, and functionality on JobsMentor, including
            but not limited to text, graphics, logos, icons, images, software,
            and user-generated content, are the intellectual property of
            JobsMentor or its contributors. This material is protected under
            applicable copyright, trademark, and other intellectual property
            laws. You may not reproduce, distribute, modify, or otherwise use
            any content from JobsMentor without prior written permission, except
            as explicitly permitted under these terms.
          </p>
          <p>
            JobsMentor grants you a limited, non-exclusive, non-transferable
            license to access and use the website for personal, non-commercial
            purposes. This includes reading and sharing reviews, submitting
            user-generated content such as reviews and ratings in compliance
            with our guidelines, and accessing publicly available resources,
            tools, and articles. Any use of JobsMentor for commercial purposes
            or in violation of these terms is strictly prohibited.
          </p>
          <p>
            Prohibited activities include copying, scraping, or extracting
            content from the website for resale or redistribution, using
            automated tools to access, monitor, or reproduce content, modifying
            or creating derivative works based on JobsMentor content, and
            removing or altering any copyright, trademark, or other proprietary
            notices.
          </p>
          <p>
            By submitting reviews, ratings, or any other content to JobsMentor,
            you grant us a worldwide, royalty-free, non-exclusive license to
            use, reproduce, modify, adapt, publish, translate, and distribute
            your content. This license enables us to display your contributions
            on our platform and promote JobsMentor services. You retain
            ownership of your content and are responsible for ensuring that it
            does not violate any intellectual property or privacy rights.
          </p>

          <p>
            JobsMentor may feature links, tools, or content provided by third
            parties. These are subject to the respective third-party licensing
            terms and are not governed by this Licensing page. Users are
            encouraged to review the terms and conditions of any third-party
            services or content they access through JobsMentor.
          </p>

          <p>
            JobsMentor reserves the right to suspend or terminate access to the
            platform for violations of these licensing terms. We may also pursue
            legal action against unauthorized use of our intellectual property.
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Licensing;
