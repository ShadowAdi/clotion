import Image from "next/image";
import React from "react";

const Heros = () => {
  return (
    <div className="flex flex-col items-center justify-center max-w-5xl ">
      <div className="flex items-center">
        <div className="relative w-[300px] h-[300px] sm:w-[350px] sm:h-[350px] md:h-[400px] md:w-[400px]">
          <Image
            src={"/Hero.png"}
            fill
            alt="Documents"
            className="object-contain dark:invert"
          />
        </div>
      </div>
    </div>
  );
};

export default Heros;
