import React from "react";
import Banner from "../components/home/Banners";

const Home = () => {
  return (
    <div className="scroll-smooth flex flex-col items-center justify-center gap-y-16">
      <div className="mainSection w-full flex items-center justify-center relative">
        <div className="absolute inset-0 bg-black bg-opacity-50 z-10"></div>
        <div className="md:w-6/12 sm:w-full text-center flex flex-col gap-y-6 items-center justify-center relative z-20">
          <p className="font-serif md:text-6xl sm:text-3xl text-4xl font-bold text-white">
            Coordinate Rescue Efforts Seamlessly
          </p>
          <p className="w-8/12 font-roboto sm:text-sm md:text-lg opacity-80 text-white">
            RescueConnect is your go-to platform for efficient coordination and real-time location sharing during emergencies, whether natural disasters or man-made crises.
          </p>
        </div>
      </div>

      <div className="text-gray-800 sm:text-2xl md:text-5xl font-serif text-center font-bold">
        {`"Empowering Rescuers in Critical Times"`}
      </div>

      <Banner />
    </div>
  );
};

export default Home;
