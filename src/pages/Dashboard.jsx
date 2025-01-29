import React, { useRef } from "react";

import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { Context } from "../Context/ContextProvider";
import { CoolMode } from "@/components/magicui/cool-mode";
import Loader from "@/components/Loader";

import RegisterModal from "@/components/RegisterModal";
import DopamemeCarousel from "@/components/Carousel";
import Footer from "@/components/Footer";
import { Layout, Row, Col } from "antd";
import { WalletSelector } from "@aptos-labs/wallet-adapter-ant-design";
import CreateButton from "../components/CreateButton";

export default function Dashboard() {
  const walletSelectorRef = useRef(null);
  const [isWalletOpen, setIsWalletOpen] = useState(false);
  const navigate = useNavigate();
  const {
    setMemeType,
    setNavActiveBar,
    account,
    data,
    loader,
    setReload,
    read,
  } = React.useContext(Context);

  const [activeButton, setActiveButton] = useState("Home");

  const handleButtonClick = (buttonName) => {
    setActiveButton(buttonName);
    setNavActiveBar(buttonName);
  };
  const handleConnectWalletClick = () => {
    if (walletSelectorRef.current) {
      walletSelectorRef.current.click();
    }
  };
  return (
    <div className="flex overflow-clip flex-col   pt-0 bg-[#030214] pb-[0px] max-md:pb-24">
      {/* loader */}
      <div
        className={` top-0 left-0 w-full h-full z-40 backdrop-filter backdrop-blur-sm ${
          loader ? "fixed" : "hidden"
        } `}
      >
        <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50 flex flex-col items-center justify-center min-h-[70vh] ">
          <Loader run={loader} />
        </div>
      </div>
      {/* loader end*/}
      {/* Register Popup */}
      <div
        className={` top-0 left-0 w-full h-full z-40 backdrop-filter backdrop-blur-sm ${
          data?.get_user_profile == null && account && read > 0
            ? "fixed"
            : "hidden"
        } `}
      >
        <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 flex flex-col items-center justify-center min-h-[70vh] ">
          <RegisterModal reload={setReload} />
        </div>
      </div>
      <div className="flex flex-col w-full ml-10 max-md:max-w-full">
        <div className="self-stretch w-full max-md:max-w-full">
          {/* navbar
           */}
          <div className="flex justify-evenly autoShow max-md:flex-col ">
            <div className="flex flex-col  w-[17%] max-md:ml-0 max-md:w-full">
              <img
                draggable={`false`}
                loading="lazy"
                srcSet="https://i.imgur.com/xAtVFOb.png"
                className="object-contain  grow shrink-0 max-w-full aspect-[1.33] w-[162px] max-md:mt-10"
              />
            </div>
            <div className="flex flex-col w-full mx-auto ml-5 max-md:ml-0 max-md:w-full">
              <div className="flex  w-max  relative right-36 gap-10 justify-between items-center  m-auto  min-w-[320px] max-md:mt-10 max-md:max-w-full">
                <div className="w-full py-2 flex gap-[51px] px-3 items-center justify-evenly relative rounded-[48px] border-[#767676] border-[1px] border-solid box-border h-[2.438rem] overflow-clip text-left text-[1.125rem] text-[#7b7b7b] font-inter">
                  <div
                    className={`w-max h-max capitalize ${
                      activeButton === "Home" ? "text-white" : ""
                    }`}
                    onClick={() => handleButtonClick("Home")}
                  >
                    {" "}
                    Home
                  </div>
                  <div
                    className={`w-max h-max capitalize   cursor-pointer hover:scale-105 hover:opacity-80 transition-all duration-200 ${
                      activeButton === "Explore" ? "text-white" : ""
                    }`}
                    onClick={() => {
                      handleButtonClick("Explore");
                      navigate("/explore");
                    }}
                  >
                    {" "}
                    Explore
                  </div>
                  <div
                    className={`w-max h-max capitalize  cursor-pointer hover:scale-105 hover:opacity-80 transition-all duration-200 ${
                      activeButton === "Gen Memes" ? "text-white" : ""
                    }`}
                    onClick={() => {
                      handleButtonClick("Gen Memes");
                      navigate("/gen-memes");
                    }}
                  >
                    {" "}
                    Gen Memes
                  </div>
                  <div
                    className={`w-max h-max capitalize  cursor-pointer hover:scale-105 hover:opacity-80 transition-all duration-200 ${
                      activeButton === "Games" ? "text-white" : ""
                    }`}
                    onClick={() => {
                      handleButtonClick("Games");
                      navigate("/games");
                    }}
                  >
                    {" "}
                    Games
                  </div>
                </div>
              </div>
              {/* wallet */}
              <div className="absolute right-24 top-10">
                {account?.address ? (
                  <div>
                    <div
                      className=" w-[136px]  h-[39px] 
                  "
                    >
                      <Layout>
                        <Row align="middle">
                          <Col
                            span={12}
                            style={{
                              textAlign: "right",
                              backgroundColor: "black",
                              paddingRight: "00px",
                            }}
                          >
                            <WalletSelector />
                          </Col>
                        </Row>
                      </Layout>
                    </div>
                  </div>
                ) : (
                  <div>
                    <div
                      onClick={() => {
                        setIsWalletOpen(true);
                      }}
                      className="w-max px-[14px] py-[9px]  cursor-pointer hover:scale-105 hover:opacity-80 transition-all duration-200 flex items-center justify-center relative rounded-[48px] border-[#767676] border-[1px] border-solid box-border h-[2.438rem] overflow-clip text-left text-[1.125rem] text-white font-inter"
                    >
                      <div className="hidden">
                        <WalletSelector setModalOpen={isWalletOpen} />
                      </div>

                      <div className="font-medium capitalize ">
                        Connect Wallet
                      </div>
                    </div>
                    <div
                      ref={walletSelectorRef}
                      className=" w-max hidden h-[39px] bg-
                  "
                    >
                      <Layout>
                        <Row align="middle">
                          <Col
                            span={12}
                            style={{
                              textAlign: "right",
                              backgroundColor: "black",
                              paddingRight: "200px",
                            }}
                          >
                            <WalletSelector
                              isModalOpen={isWalletOpen}
                              setModalOpen={setIsWalletOpen}
                              // Add any wallet sorting options as props here if needed
                            />
                          </Col>
                        </Row>
                      </Layout>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* first part */}
      <div className="relative w-full h-auto ">
        {/* absolute part */}
        <div className="absolute right-0 top-[127px] overflow-visible ">
          <img
            className=" w-[282px]  object-cover "
            src="https://i.imgur.com/nZLvDe5.png"
            alt=""
          />
        </div>
        <div className="absolute left-0 top-[127px]">
          <img
            className=" w-[282px]  object-cover"
            src="https://i.imgur.com/3RSxY2q.png"
            alt=""
          />
        </div>
        <div className="absolute top-16">
          <img src="https://i.imgur.com/gBW9LUu.png" alt="" />
        </div>

        <div className="mt-[20px] w-full flex items-start justify-center">
          <div className="w-max mx-auto relative capitalize text-[6.875rem] font-bebas-neue text-center inline-block [filter:drop-shadow(0px_30px_60px_rgba(0,_0,_0,_0.5))] text-white">
            <span>{`create memes like a `}</span>
            <span className="text-[#ffe500] p-2 px-5 w-max  relative">
              co
              <img
                className="absolute bottom-0 right-0 z-10 object-cover overflow-visible"
                src="https://i.imgur.com/9Rn9OMz.png"
                alt=""
              />
            </span>
          </div>
        </div>
        <div>
          <div className="w-max mx-auto flex flex-col mt-5 relative text-[1.563rem] font-medium font-inter text-white text-center  h-[4.313rem]">
            {`  Get meme-fied in a snap with MemeCO. Instant laughs, zero effort.`}
            <span>{`Let's meme it!`}</span>
          </div>
        </div>

        <div
          className="
        mt-[120px] z-20 mb-[200px] flex gap-6 w-max mx-auto"
        >
          <div
            onClick={() => {
              navigate("/explore");
            }}
            className="z-20  cursor-pointer hover:scale-105 hover:opacity-80 transition-all duration-200 flex w-[181px] h-[56px] col-span-1 "
          >
            <img src="https://i.imgur.com/T6wAbDL.png" alt="" />
          </div>
          <div
            onClick={() => {
              navigate("/gen-memes");
            }}
            className="flex z-20  w-[181px] h-[56px]   cursor-pointer hover:scale-105 hover:opacity-80 transition-all duration-200 "
          >
            <img src="https://i.imgur.com/pvs7qNb.png" alt="" />
          </div>
        </div>

        <div className="mx-auto w-max">
          <div className="w-max mx-auto autoShow relative text-[5.188rem] font-bebas-neue text-white text-left inline-block">
            Features that'll make you go "STONKS"
          </div>
        </div>
      </div>

      {/* second part */}
      <div className=" mt-[60px] autoShow px-[50px] grid grid-cols-12 gap-9">
        <div className="col-span-4 ">
          <img
            onContextMenu={(e) => e.preventDefault()}
            draggable={"false"}
            src="https://i.imgur.com/zQXjTT9.png"
            alt=""
            className=""
          />
        </div>
        <div className="col-span-4 ">
          <img
            onContextMenu={(e) => e.preventDefault()}
            draggable={"false"}
            src="https://i.imgur.com/IAeKObQ.png"
            alt=""
          />
        </div>
        <div className="col-span-4 ">
          <img
            onContextMenu={(e) => e.preventDefault()}
            draggable={"false"}
            src="https://i.imgur.com/NO9R78M.png"
            alt=""
          />
        </div>
      </div>
      <div className="mt-24 ">
        <div className="flex items-center justify-center autoShow ">
          <img
            onClick={() => {
              navigate("/type");
            }}
            className="w-max  cursor-pointer hover:scale-105 hover:opacity-80 transition-all duration-200 h-[56px]  object-cover "
            src="https://i.imgur.com/pvs7qNb.png"
            alt=""
          />
        </div>
      </div>
      {/* aptos winter school */}
      {/* <div className=" mt-[130px] autoShow w-full flex items-center justify-center">
        <div className="w-max mx-auto relative text-[1.5rem] uppercase font-semibold font-inter text-left inline-block text-white">
          <span>{`memes created in `}</span>
          <span className="text-[#00aaff]">APTOS WINTER SCHOOL</span>
          <span className="text-[#f24407]">{` `}</span>
          <span>BY MEMEVERSE</span>
        </div>
      </div> */}

      {/* Pics */}
      <div className="grid autoShow grid-cols-12 mt-10 gap-8 px-[72px]">
        <div className="col-span-3 ">
          <img src="https://i.imgur.com/xtaI51s.png" alt="" />
        </div>
        <div className="col-span-3 ">
          <img
            src="https://shreyashsingh.publit.io/file/output-qmZ.jpg"
            alt=""
          />
        </div>
        <div className="col-span-3 ">
          <video
            autoPlay
            loop
            muted
            src="https://i.imgur.com/vxuWBsU.mp4"
          ></video>
        </div>
        <div className="col-span-3 ">
          <img src="https://i.imgur.com/SuMm1os.jpeg" alt="" />
        </div>
      </div>

      <div className=" mt-[67px] w-full flex flex-col items-center">
        <div className="w-max autoShow relative text-[5.188rem] font-bebas-neue text-white text-left inline-block">
          Features that'll make you go "STONKS"
        </div>
        <div
          draggable={"false"}
          className="mt-20 w-full gap-[25px] px-[60px] grid grid-cols-12"
        >
          <div
            onClick={() => {
              setMemeType(0);
              navigate("/meme-input");
            }}
            draggable={"false"}
            className=" col-span-4 autoShow flex pb-6 items-end h-[300px] bg-[url('https://i.imgur.com/hJfaHsy.png')]  bg-contain bg-no-repeat "
          >
            <CreateButton />
          </div>
          <div
            onClick={() => {
              setMemeType(1);
              navigate("/meme-input");
            }}
            draggable={"false"}
            className=" col-span-4 autoShow  flex pb-6 items-end h-[300px] bg-[url('https://i.imgur.com/nEGlk4S.png')]  bg-contain bg-no-repeat "
          >
            <CreateButton />
          </div>
          <div
            onClick={() => {
              setMemeType(4);
              navigate("/meme-input");
            }}
            draggable={"false"}
            className=" col-span-4 autoShow  flex pb-6 items-end h-[300px] bg-[url('https://i.imgur.com/AiscACY.png')]  bg-contain bg-no-repeat "
          >
            <CreateButton />
          </div>
          <div
            onClick={() => {
              setMemeType(2);
              navigate("/meme-input");
            }}
            draggable={"false"}
            className=" col-span-4 autoShow  flex pb-6 items-end h-[300px] bg-[url('https://i.imgur.com/VivnoJs.png')]  bg-contain bg-no-repeat "
          >
            <CreateButton />
          </div>
          <div
            onClick={() => {
              setMemeType(2);
              navigate("/meme-input");
            }}
            draggable={"false"}
            className=" col-span-4 autoShow  flex pb-6 items-end h-[300px] bg-[url('https://i.imgur.com/z7AdpIB.png')]  bg-contain bg-no-repeat "
          >
            <CreateButton />
          </div>
          <div
            onClick={() => {
              setMemeType(3);
              navigate("/meme-input");
            }}
            draggable={"false"}
            className=" col-span-4 autoShow  flex pb-6 items-end h-[300px] bg-[url('https://i.imgur.com/FdtMN3S.png')]  bg-contain bg-no-repeat "
          >
            <CreateButton />
          </div>
        </div>
      </div>

      {/* end */}
      <div className=" mt-[116px]">
        <div className="w-[90%] mx-auto flex flex-col items-center justify-center  relative rounded-[13px] border-[#737373] border-[1px] border-solid box-border h-[15.063rem] overflow-clip text-left text-[5rem] text-[#d8d8d8] font-bebas-neue">
          <div className=" tracking-[-0.04em] [filter:drop-shadow(0px_30px_60px_rgba(0,_0,_0,_0.5))]">
            <span>{`Transform thoughts into `}</span>
            <span className="text-[#ffe500]   autoShow  ">Memes</span>
            <span> with MEMECO</span>
          </div>
          <div className="text-[1.5rem]    uppercase font-medium font-inter text-[#8d8d8d]">{`One viral MemeCo will change your life.`}</div>
        </div>
      </div>

      <div className="mt-20 ">
        <Footer />
      </div>
    </div>
  );
}
