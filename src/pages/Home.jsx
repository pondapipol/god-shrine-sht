import React from "react";
import { Link } from "react-router-dom";

import Video from "../video/thai-dance.mp4";

const Home = () => {
  return (
    <div className="w-screen h-screen" style={{ background: "#b68884" }}>
      <video autoPlay muted loop className="fixed w-full h-full">
        <source src={Video} type="video/mp4" />
      </video>
      <div className="p-8 w-screen h-screen flex flex-col justify-center items-center bg-black bg-opacity-50 absolute">
        <div className="text-center text-white text-3xl font-semibold">
          <div className="mb-1">Welcome to our digital shrine</div>
          <div>We will make your dreams come true</div>
        </div>
        <div className="pt-8">
          <Link to={"/choose-incent-quantity"}>
            <button className="rounded-full p-2 bg-purple-500 text-white font-semibold w-40 shadow">
              GET STARTED
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
