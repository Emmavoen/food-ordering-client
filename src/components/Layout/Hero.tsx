import { assets } from "@/assets/assets";
import React from "react";

const Hero = () => {
  return (
    <div>
      <img
        src={assets.hero}
        alt=""
        className="w-full max-h-[600px] object-cover"
      />
    </div>
  );
};

export default Hero;
