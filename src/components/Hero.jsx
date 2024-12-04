import React from "react";
import './Button.css'
import c1l from "../assets/c1_left.webp";
import c1r from "../assets/c1_right.webp";
import c2l from "../assets/c2_left.webp";
import c2r from "../assets/c2_right.webp";
import c3l from "../assets/c3_left.webp";
import c3r from "../assets/c3_right.webp";
import c4l from "../assets/c4_left.webp";
import c4r from "../assets/c4_right.webp";

const Hero = () => {
  return (
    <div className="font-poppins">
      <div
        id="default-carousel"
        className="relative w-full z-20"
        data-carousel="slide"
      >
        {/* <!-- Carousel wrapper --> */}
        <div className="relative h-80 overflow-hidden rounded-lg md:h-[30rem]">
          {/* <!-- Item 1 --> */}
          <div className="hidden duration-700 ease-in-out" data-carousel-item>
          <div className="w-full h-full flex justify-between bg-[#F0F9FC]">
            <div><img src={c1l} /></div>
            
            <div className="self-center text-center px-5 flex flex-col gap-4 justify-center items-center">
                <h3 className="text-lg md:text-3xl tracking-wider">Peferably | 2024</h3>
                <h1 className="text-2xl md:text-5xl uppercase font-medium tracking-wider">Best Company Work-Life Balance</h1>
                <button className="button-89">Explore the list</button>
            </div>

            <div className="self-end"><img src={c1r}  /></div>
          </div>
          </div>

          {/* <!-- Item 2 --> */}
          <div className="hidden duration-700 ease-in-out" data-carousel-item>
          <div className="w-full h-full flex justify-between bg-[#F0F9FC]">
            <div><img src={c2l} /></div>
            
            <div className="self-center text-center px-5 flex flex-col gap-4 justify-center items-center">
                <h3 className="text-lg md:text-3xl tracking-wider">Peferably | 2024</h3>
                <h1 className="text-2xl md:text-5xl uppercase font-medium tracking-wider">Best Company Perks & Benefits</h1>
                <button className="button-89">Explore the list</button>
            </div>

            <div className="self-end"><img src={c2r}  /></div>
          </div>
          </div>

          {/* <!-- Item 3 --> */}
          <div className="hidden duration-700 ease-in-out" data-carousel-item>
          <div className="w-full h-full flex justify-between bg-[#F0F9FC]">
            <div><img src={c3l} /></div>
            
            <div className="self-center text-center px-5 flex flex-col gap-4 justify-center items-center">
                <h3 className="text-lg md:text-3xl tracking-wider">Peferably | 2024</h3>
                <h1 className="text-2xl md:text-5xl uppercase font-medium tracking-wider">Happiest Employees</h1>
                <button className="button-89">Explore the list</button>
            </div>

            <div className="self-end"><img src={c3r}  /></div>
          </div>
          </div>

          {/* <!-- Item 4 --> */}
          <div className="hidden duration-700 ease-in-out" data-carousel-item>
          <div className="w-full h-full flex justify-between bg-[#F0F9FC]">
            <div><img src={c4l} /></div>
            
            <div className="self-center text-center px-5 flex flex-col gap-4 justify-center items-center">
                <h3 className="text-lg md:text-3xl tracking-wider">Peferably | 2024</h3>
                <h1 className="text-2xl md:text-5xl uppercase font-medium tracking-wider">Best Career Growth</h1>
                <button className="button-89">Explore the list</button>
            </div>

            <div className="self-end"><img src={c4r}  /></div>
          </div>
          </div>
        </div>
        {/* <!-- Slider indicators --> */}
        <div className="absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3 rtl:space-x-reverse">
          <button
            type="button"
            className="w-3 h-3 rounded-full bg-slate-200 shadow-md"
            aria-current="true"
            aria-label="Slide 1"
            data-carousel-slide-to="0"
          ></button>
          <button
            type="button"
            className="w-3 h-3 rounded-full bg-slate-200 shadow-md"
            aria-current="false"
            aria-label="Slide 2"
            data-carousel-slide-to="1"
          ></button>
          <button
            type="button"
            className="w-3 h-3 rounded-full bg-slate-200 shadow-md"
            aria-current="false"
            aria-label="Slide 3"
            data-carousel-slide-to="2"
          ></button>
          <button
            type="button"
            className="w-3 h-3 rounded-full bg-slate-200 shadow-md"
            aria-current="false"
            aria-label="Slide 4"
            data-carousel-slide-to="3"
          ></button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
