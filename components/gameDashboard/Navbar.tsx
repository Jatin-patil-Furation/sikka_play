
import React from "react";
import Image from "next/image";

const Navbar = ({ closeDrawer }: any) => {
  const playerWallet = 125;
  

  return (
    <nav className="">
      <div className="fixed z-40 left-0 top-3 right-0 mx-auto  w-[90%] flex justify-between items-center  backdrop-blur-md bg-opacity-20 p-3 max-w-7xl">
        <Image
          src={"/assets/landingPage/menu.svg"}
          alt="menu-icon"
          width={50}
          height={50}
          className="w-[7%] h-[7%] lg:w-[2.5%] lg:h-[2.5%%] hover:cursor-pointer"
          onClick={closeDrawer}
        />
        <Image
          src={"/assets/landingPage/sikkafontfilled.svg"}
          alt="sikkaplay-icon"
          width={50}
          height={50}
          className="w-[35%] lg:w-[20%]"
        />
        <button className="custom-gradient px-1 py-1 md:p-2 lg:p-3 text-sm">
          <span className="hidden md:inline ">Total Balance:</span> $
          {playerWallet}
        </button>
      </div>
      
    </nav>
  );
};

export default Navbar;
