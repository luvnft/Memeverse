import Navbar from "@/components/Navbar";
import RegisterModal from "@/components/RegisterModal";
import React from "react";
import { useNavigate } from "react-router-dom";
import { Context } from "../Context/ContextProvider";
import Loader from "@/components/Loader";
import Footer from "@/components/Footer";

const GenMemes = () => {
  const { memeType, setMemeType, setReload, account, read, data, loader } =
    React.useContext(Context);
  const navigate = useNavigate();
  return (
    <div className=" bg-[#030214] pb-10">
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
      <div>
        <Navbar />
      </div>

      <div className="my-10 px-[10%]">
        <img
          draggable={`false`}
          className=" object-cover"
          src="https://i.imgur.com/03Yv5w0.png"
          alt=""
        />
      </div>

      <div className="grid px-[10%] grid-cols-12 gap-x-6 gap-y-11 ">
        {/* card1 */}
        <div
          onClick={() => {
            setMemeType(0);
            navigate("/meme-input");
          }}
          className=" col-span-4 "
        >
          <img
            className=" cursor-pointer hover:scale-95 hover:opacity-80 transition-all duration-200"
            src="https://i.imgur.com/B0TSdSi.png"
            alt=""
          />
        </div>

        {/* card2 */}
        <div
          onClick={() => {
            setMemeType(1);
            navigate("/meme-input");
          }}
          className=" col-span-4"
        >
          <img
            className=" cursor-pointer hover:scale-95 hover:opacity-80 transition-all duration-200"
            src="https://i.imgur.com/wFw3cXB.png"
            alt=""
          />
        </div>

        {/* card3 */}
        <div
          className="col-span-4"
          onClick={() => {
            setMemeType(2);
            navigate("/meme-input");
          }}
        >
          <img
            className=" cursor-pointer hover:scale-95 hover:opacity-80 transition-all duration-200"
            src="https://i.imgur.com/MUjPJU9.png"
            alt=""
          />
        </div>

        <div
          className="col-span-4"
          onClick={() => {
            setMemeType(2);
            navigate("/meme-input");
          }}
        >
          <img
            className=" cursor-pointer hover:scale-95 hover:opacity-80 transition-all duration-200"
            src="https://i.imgur.com/ysOoRwp.png"
            alt=""
          />
        </div>
        {/* card4 */}
        <div
          className=" col-span-4 "
          onClick={() => {
            setMemeType(3);
            navigate("/meme-input");
          }}
        >
          <img
            className=" cursor-pointer hover:scale-95 hover:opacity-80 transition-all duration-200"
            src="https://i.imgur.com/eMriOPb.png"
            alt=""
          />
        </div>

        {/* card5 */}
        <div
          onClick={() => {
            setMemeType(4);
            navigate("/meme-input");
          }}
          className="col-span-4 "
        >
          <img
            className=" cursor-pointer hover:scale-95 hover:opacity-80 transition-all duration-200"
            src="https://i.imgur.com/glDfGhD.png"
            alt=""
          />
        </div>
      </div>
      {/* <div className="mt-28">
        <Footer />
      </div> */}
    </div>
  );
};

export default GenMemes;
