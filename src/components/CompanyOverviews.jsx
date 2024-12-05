import React from "react";

const CompanyOverviews = () => {
  return (
    <div className="font-poppins bg-[#F3F4F6] py-10">
      <div className="max-w-screen-xl mx-auto flex flex-col lg:flex-row items-center gap-5">
        <div className="max-w-screen-md px-3">
          <h2 className="text-xl font-semibold pb-5">Overview</h2>
          <p className="text-sm tracking-wider">
            Adobe is everywhere you look—from movies to advertisements and
            mobile apps. Our products reach all corners of the world and so will
            your ideas. Adobe believes creativity empowers transformation.
            Founded 40 years ago on the simple idea of creating innovative
            products that change the world, Adobe's groundbreaking technology is
            empowering everyone, everywhere to imagine, create, and bring any
            digital experience to life. Our business strategy focuses on
            unleashing creativity, accelerating document productivity, and
            powering digital businesses through our three clouds - Adobe
            Creative Cloud, Document Cloud, and Experience Cloud. Our solutions
            give customers a real competitive advantage, enabling them to engage
            their constituents across every digital touch point. Underpinning
            our clouds, is Firefly and Sensei, our artificial intelligence
            platform.
          </p>
          <h5 className="text-sm tracking-wider text-gray-600 py-5">
            Adobe was founded in 1982 and its current CEO is Shantanu Narayen.
            Since its inception 42 years ago, Adobe has grown to 30000
            employees.
          </h5>

          <h4 className="text-base font-semibold">Mission</h4>
          <h5 className="text-sm tracking-wider pb-5">
            Let's create experiences that matter. Adobe is the global leader in
            digital media and digital marketing solutions. Our creative,
            marketing, and document solutions empower everyone – from emerging
            artists to global brands – to bring digital creations to life and
            deliver immersive, compelling experiences to the right person at the
            right moment for the best results. In short, Adobe is everywhere,
            and we’re changing the world through digital experiences.
          </h5>

          <h4 className="text-base font-semibold">Vision</h4>
          <h5 className="text-sm tracking-wider pb-5">
            Changing the world through personalized digital experiences. Founded
            40 years ago on the simple idea of creating innovative products that
            change the world, Adobe offers groundbreaking technology that
            empowers everyone, everywhere to imagine, create, and bring any
            digital experience to life.
          </h5>

          <h4 className="text-base font-semibold">Values</h4>
          <h5 className="text-sm tracking-wider pb-5">
            Create the Future, Own the Outcome, Raise the Bar, Be Genuine.
          </h5>
        </div>

        <div className="p-2">
          <img src="https://www.officelovin.com/wp-content/uploads/2015/09/adobe-san-francisco-office-2.jpg" />
        </div>
      </div>
    </div>
  );
};

export default CompanyOverviews;
