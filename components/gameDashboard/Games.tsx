import React from "react";
import Image from "next/image";
const Games = ({setTeenPattiGame}:any) => {
  return (
    <div className=" mt-5 sm:mt-7 md:mt-9 lg:mt-12 games-container flex justify-around items-center max-w-7xl  mx-3 flex-wrap gap-3 xl:justify-between">
      <div className="teen-patti-container basis-full sm:basis-[40%] md:basis-[36%] lg:basis-[45%] space-y-1 sm:space-y-2 md:space-y-3 lg:space-y-4 xl:space-y-5 ">
        <Image
          src={"/assets/landingPage/teen-patti.svg"}
          alt=""
          className="w-full"
          width={500}
          height={500}
        />
        <button className="custom-gradient px-3 py-2 w-full  text-sm sm:text-base md:text-lg lg:text-xl" onClick={() => setTeenPattiGame(true)}>
          Play Button
        </button>
      </div>
      <div className="merriage-container basis-full sm:basis-[40%] md:basis-[36%] lg:basis-[45%] space-y-1 sm:space-y-2 md:space-y-3 lg:space-y-4 xl:space-y-5">
        <Image
          src={"/assets/landingPage/marriage.svg"}
          alt=""
          className=" w-full "
          width={500}
          height={700}
        />
        <button className="custom-gradient px-3 py-2 w-full  text-sm sm:text-base md:text-lg lg:text-xl">
          Play Button
        </button>
      </div>
    </div>
  );
};

export default Games;
