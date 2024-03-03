import React, { useContext } from "react";
import Img from "../img/woman_hero2.png";
import { Link as ScrollLink } from "react-scroll";
import { SidebarContext } from "../contexts/SidebarContext";

const Hero = () => {
  const { handleClose } = useContext(SidebarContext);

  return (
    <section
      onClick={handleClose}
      className="bg-yellow-100  h-[800px] bg-no-repeat bg-cover bg-center py-24"
    >
      <div className="container mx-auto flex justify-around h-full">
        <div className="flex flex-col justify-center">
          <div className="font-semibold flex items-center uppercase">
            <div className="w-10 h-[2px] bg-red-500 mr-3"></div>new Trend
          </div>
          <h1 className="text-[70px] leading-[1.1] font-light mb-4">
            AUTUMN STORE <br />
            <span className="font-semibold">WINTER EDITION</span>
          </h1>
          <ScrollLink
            to="products" 
            spy={true}
            smooth={true}
            offset={-100} 
            duration={1000}
            isDynamic={true}
            className="self-start uppercase font-semibold border-b-2 border-primary cursor-pointer"
          >
            Discover More
          </ScrollLink>
        </div>
        <div className="hidden lg:block overflow-y-clip">
          <img src={Img} alt="" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
