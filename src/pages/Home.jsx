import React from 'react';
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="p-8 h-screen flex flex-col justify-center items-center bg-purple-400">
      <div className="text-center text-white text-3xl font-semibold">
        <div>Welcome to our digital shrine</div>
        <div>We will make your dreams come true</div>
      </div>
      <div className="pt-6">
        <Link to={'/choose-incent-quantity'}>
          <button
            className="rounded-full p-2 bg-purple-500 text-white font-semibold w-40 shadow"
          >
            GET STARTED
          </button>
        </Link>
      </div>
    </div>
  )
}

export default Home;
