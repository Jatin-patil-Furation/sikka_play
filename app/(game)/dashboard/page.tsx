"use client";
import Banner from "@/components/gameDashboard/Banner";
import Games from "@/components/gameDashboard/Games";
import Navbar from "@/components/gameDashboard/Navbar";
import Overlay from "@/components/gameDashboard/Overlay";
import React, { useState } from "react";
import Image from "next/image";
import Logout from "@/components/modals/Logout";
import BannedPlayers from "@/components/modals/BannedPlayers";
import TeenPatti from "@/components/modals/TeenPatti";
import TransactionHistory from "@/components/modals/TransactionHistory";
import TournamentWinners from "@/components/modals/TournamentWinners";
import ApprovedWinners from "@/components/modals/ApprovedWinners";
import ViewGames from "@/components/modals/ViewGames";
import Link from 'next/link'

const page = () => {
  const [drawerOpen, setDrawerOpen] = useState(true);
  const ToggleDrawer = () => {
    setDrawerOpen((prev) => !prev);
  };
  const playerInfo = {
    name: "player name",
    email: "player@gmail.com",
    gamePlayed: "20",
    gameWon: "10",
    gameLost: "10",
    balance: "10",
  };

  const [showDropDown, setShowDropDown] = useState(true);
  const [showLogoutModal, setLogoutModal] = useState(false);
  const [showBannedModal, setBannedModal] = useState(false);
  const [showTeenPattiGame, setTeenPattiGame] = useState(false);
  const [showTransactionHistory, setTransactionHistory] = useState(false);
  const [showTournamentWinners, setTournamentWinners] = useState(false);
  const [showApprovedWinners, setApprovedWinners] = useState(false);
  const [showViewGames, setViewGames] = useState(false);




  const toggleDropDown = () => {
    setShowDropDown((prev) => !prev);
  };

  const handleLogout = () => {
    setDrawerOpen(false);
    setLogoutModal(true);
  };

  const handleBanned = () => {
    setDrawerOpen(false);
    setBannedModal(true);
  };

  const handleTransactionHistory = () => {
    setDrawerOpen(false);
    setTransactionHistory(true);
  }

  const handleTournamentWinners = () => {
    setDrawerOpen(false);
    setTournamentWinners(true);
  }

  const handleApprovedWinners = () => {
    setDrawerOpen(false);
    setApprovedWinners(true);
  }

  const handleViewGames = () => {
    setDrawerOpen(false);
    setViewGames(true);
  }

  return (
    <main className=" w-[100vw] py-3  text-white z-0 relative">
      <section className={`body-container max-w-7xl mx-auto overflow-x-hidden ${showLogoutModal || showBannedModal || showTeenPattiGame || showTransactionHistory
        ? ' overflow-y-hidden'
        : ''
        }`}>
        <Navbar closeDrawer={ToggleDrawer} />
        {drawerOpen && <Overlay closeDrawer={ToggleDrawer} />}
        {drawerOpen ? (
          <div className="bg-Background px-2">
            <div className="md:hidden mt-20 ">
              <div className="px-2 py-3 space-y-3  overflow-y-scroll">
                {/* user info */}
                <div className="flex justify-between items-center ">
                  <div className="player-info flex justify-between gap-5 items-center">
                    <div className="image-container rounded-full">
                      <Image
                        src={"/assets/drawer/user-avatar.svg"}
                        alt="user avatar"
                        width={50}
                        height={50}
                        className="text-center"
                      />
                    </div>
                    <div className="flex flex-col ">
                      <p className="text-sm">{playerInfo.name}</p>
                      <p className="text-sm text-GreyLight">
                        {playerInfo.email}
                      </p>
                    </div>
                  </div>
                  <Link href={"/update-user"}>
                    <Image
                      src={"/assets/drawer/edit.svg"}
                      alt="user avatar"
                      width={50}
                      height={50}
                      className="text-center w-[90%]"
                    />
                  </Link>



                </div>
                {/* user game status */}
                <div className="flex justify-between items-center  ">
                  <div className="border border-Background  pr-2 border-r-GreyLight border-r-1 text-center">
                    <p className="text-lg ">{playerInfo.gamePlayed}</p>
                    <p className="text-sm text-GreyLight">Game Played</p>
                  </div>
                  <div className="border border-Background pr-2 border-r-GreyLight border-r-1  text-center">
                    <p className="text-base ">{playerInfo.gamePlayed}</p>
                    <p className="text-sm text-GreyLight">Game Won</p>
                  </div>
                  <div className="border border-Background pr-2 border-r-GreyLight border-r-1  text-center ">
                    <p className="text-base ">{playerInfo.gamePlayed}</p>
                    <p className="text-sm text-GreyLight">Game Lost</p>
                  </div>
                  <div className="text-center pr-2">
                    <p className="text-base ">{playerInfo.gamePlayed}</p>
                    <p className="text-sm text-GreyLight">Balance</p>
                  </div>
                </div>

                {/* menu items */}

                <button className="px-4 py-3 flex items-center rounded-sm justify-between  relative bg-GreyDark w-full" onClick={handleTournamentWinners}>
                  <div className="flex items-center gap-3 basis-[70%]">
                    <Image
                      src={"/assets/drawer/trophy.svg"}
                      alt="deposit icon"
                      width={50}
                      height={50}
                      className="w-[5%]"
                    />
                    <p className="text-base">Tournament Winners</p>
                  </div>
                  <Image
                    src={"/assets/drawer/arrow-right.svg"}
                    alt="right arrow icon"
                    width={50}
                    height={50}
                    className="w-[5%]"
                  />
                </button>

                <button className="px-4 py-3 flex items-center rounded-sm justify-between  relative bg-GreyDark w-full" onClick={handleApprovedWinners}>
                  <div className="flex items-center gap-3 basis-[70%]">
                    <Image
                      src={"/assets/drawer/trophy.svg"}
                      alt="deposit icon"
                      width={50}
                      height={50}
                      className="w-[5%]"
                    />
                    <p className="text-base">Approved Winners</p>
                  </div>
                  <Image
                    src={"/assets/drawer/arrow-right.svg"}
                    alt="right arrow icon"
                    width={50}
                    height={50}
                    className="w-[5%]"
                  />
                </button>

                <button onClick={handleBanned} className="px-4 py-3 flex items-center rounded-sm justify-between  relative bg-GreyDark w-full">
                  <div className="flex items-center gap-3 basis-[70%]">
                    <Image
                      src={"/assets/drawer/banned.svg"}
                      alt="deposit icon"
                      width={50}
                      height={50}
                      className="w-[6%]"
                    />
                    <p className="text-base">Banned Players</p>
                  </div>
                  <Image
                    src={"/assets/drawer/arrow-right.svg"}
                    alt="right arrow icon"
                    width={50}
                    height={50}
                    className="w-[5%]"
                  />
                </button>

                <Link href={"/tournament-create"} className="px-1">
                <button className="px-4 py-3 flex items-center rounded-sm justify-between  relative bg-GreyDark w-full">
                  <div className="flex items-center gap-3 basis-[70%]">
                    <Image
                      src={"/assets/drawer/create-tournament.svg"}
                      alt="deposit icon"
                      width={50}
                      height={50}
                      className="w-[5%]"
                    />
                    <p className="text-base">Create Tournament</p>
                  </div>
                  <Image
                    src={"/assets/drawer/arrow-right.svg"}
                    alt="right arrow icon"
                    width={50}
                    height={50}
                    className="w-[5%]"
                  />
                </button>
                </Link>
                

                <button className="px-4 py-3 flex items-center rounded-sm justify-between  relative bg-GreyDark w-full" onClick={handleViewGames}>
                  <div className="flex items-center gap-3 basis-[70%]">
                    <Image
                      src={"/assets/drawer/eye.svg"}
                      alt="deposit icon"
                      width={50}
                      height={50}
                      className="w-[5%]"
                    />
                    <p className="text-base">View Games</p>
                  </div>
                  <Image
                    src={"/assets/drawer/arrow-right.svg"}
                    alt="right arrow icon"
                    width={50}
                    height={50}
                    className="w-[5%]"
                  />
                </button>

                <button className="px-4 py-3 flex items-center rounded-sm justify-between  relative bg-GreyDark w-full">
                  <div className="flex items-center gap-3">
                    <Image
                      src={"/assets/drawer/upload.svg"}
                      alt="deposit icon"
                      width={50}
                      height={50}
                      className="w-[50%]"
                    />
                    <p className="text-base">Deposit</p>
                  </div>
                  <Image
                    src={"/assets/drawer/arrow-right.svg"}
                    alt="right arrow icon"
                    width={50}
                    height={50}
                    className="w-[5%]"
                  />
                </button>

                <button className="px-4 py-3 flex items-center rounded-sm justify-between  relative bg-GreyDark w-full">
                  <div className="flex items-center gap-3">
                    <Image
                      src={"/assets/drawer/upload.svg"}
                      alt="Withdraw icon"
                      width={50}
                      height={50}
                      className="w-[50%] rotate-180"
                    />
                    <p className="text-base">Withdraw</p>
                  </div>
                  <Image
                    src={"/assets/drawer/arrow-right.svg"}
                    alt="right arrow icon"
                    width={50}
                    height={50}
                    className="w-[5%]"
                  />
                </button>

                <button className="px-4 py-3 flex items-center rounded-sm justify-between  relative bg-GreyDark w-full" onClick={handleTransactionHistory}>
                  <div className="flex justify-start items-center gap-3 basis-[70%]">
                    <Image
                      src={"/assets/drawer/clock.svg"}
                      alt="Withdraw icon"
                      width={50}
                      height={50}
                      className="w-[5%]"
                    />
                    <p className="text-base">Transaction History</p>
                  </div>
                  <Image
                    src={"/assets/drawer/arrow-right.svg"}
                    alt="right arrow icon"
                    width={50}
                    height={50}
                    className="w-[5%]"
                  />
                </button>

                <div>
                  <button
                    onClick={toggleDropDown}
                    className="px-4 py-3 flex items-center rounded-sm justify-between  relative bg-GreyDark w-full"
                  >
                    <div className="flex items-center gap-3">
                      <Image
                        src={"/assets/drawer/settings.svg"}
                        alt="Withdraw icon"
                        width={50}
                        height={50}
                        className="w-[30%] rotate-180"
                      />
                      <p className="text-base">Settings</p>
                    </div>
                    <Image
                      src={"/assets/drawer/chevron-down.svg"}
                      alt="right arrow icon"
                      width={50}
                      height={50}
                      className={`w-[5%] ${showDropDown ? "rotate-180" : "rotate-0"
                        } "" `}
                    />
                  </button>
                  {showDropDown && (
                    <div className="bg-GreyDark flex flex-col items-center gap-3 pl-12">
                      <a
                        href=""
                        className="border border-GreyDark border-b-GreyLight basis-[75%] w-full text-left pb-2"
                      >
                        About Game
                      </a>
                      <a
                        href="#"
                        className="border border-GreyDark border-b-GreyLight basis-[75%] w-full text-left pb-2"
                      >
                        T&C
                      </a>
                      <a
                        href="#"
                        className="border border-GreyDark border-b-GreyLight basis-[75%] w-full text-left pb-2"
                      >
                        Legal Notice
                      </a>
                      <a
                        href="#"
                        className="border border-GreyDark border-b-GreyLight basis-[75%] w-full text-left pb-2 "
                      >
                        Change Password
                      </a>
                      <a
                        href="#"
                        className="basis-[75%] w-full text-left pb-2  "
                      >
                        Help
                      </a>
                    </div>
                  )}
                </div>

                <button
                  onClick={handleLogout}
                  className="mt-8 text-center w-full border border-Secondary text-Secondary font-bold text-lg"
                >
                  Log out
                </button>
              </div>
            </div>
            <div className="hidden md:block mt-20">
              draWoPEN AND TABLET VIEW
            </div>
          </div>
        ) : (
          <div>
            <Banner />
            <Games setTeenPattiGame={setTeenPattiGame} />
          </div>
        )}


      </section>
      <section>
        {showLogoutModal && (
          <div>
            <div
              className=" fixed inset-0 bg-black opacity-80 z-[50]     "
              onClick={ToggleDrawer}
            ></div >
            <Logout setLogoutModal={setLogoutModal} />
          </div>
        )}
        {showBannedModal && (
          <div>
            <div
              className=" fixed inset-0 bg-black opacity-80 z-[50]     "
              onClick={ToggleDrawer}
            ></div >
            <BannedPlayers setLogoutModal={setBannedModal} />
          </div>
        )}
        {showTeenPattiGame && (
          <div>
            <div
              className=" fixed inset-0 bg-black opacity-80 z-[50]     "
              onClick={ToggleDrawer}
            ></div >
            <TeenPatti setTeenPattiGame={setTeenPattiGame} />
          </div>
        )}
        {showTransactionHistory && (
          <div>
            <div
              className=" fixed inset-0 bg-black opacity-80 z-[50]     "
              onClick={ToggleDrawer}
            ></div >
            <TransactionHistory setTransactionHistory={setTransactionHistory} />
          </div>
        )}

        {/* inComplete */}
        {showTournamentWinners && (
          <div>
            <div
              className=" fixed inset-0 bg-black opacity-80 z-[50]     "
              onClick={ToggleDrawer}
            ></div >
            <TournamentWinners setTournamentWinners={setTournamentWinners} />
          </div>
        )}

        {showApprovedWinners && (
          <div>
            <div
              className=" fixed inset-0 bg-black opacity-80 z-[50]     "
              onClick={ToggleDrawer}
            ></div >
            <ApprovedWinners setApprovedWinners={setApprovedWinners} />
          </div>
        )}

        {showViewGames && (
          <div>
            <div
              className=" fixed inset-0 bg-black opacity-80 z-[50]     "
              onClick={ToggleDrawer}
            ></div >
            <ViewGames setViewGames={setViewGames} />
          </div>
        )}
      </section>
    </main>
  );
};

export default page;
