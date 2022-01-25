import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRightIcon } from '@heroicons/react/solid';

function Landing() {
  return (
    <div
      id="landing"
      className="container min-h-screen bg-gray-100 dark:bg-gray-800"
    >
      <div className="container min-w-full min-h-screen pt-20 flex flex-col items-center justify-center">
        <h1 className="text-6xl font-bold text-center w-fit">
          <span className="text-gray-900 dark:text-white">
            Need a Running Shoe?
          </span>
          <br />
          <span className="text-violet-700">Find Your Fit</span>
        </h1>
        <div className="flex flex-row mt-12">
          <button className="bg-violet-700 px-6 py-4 rounded-xl text-white w-fit mr-4 shadow-sm text-xl cursor-pointer hover:shadow-none hover:bg-violet-800 hover:text-gray-100 focus:outline-none focus:ring focus:ring-offset-2 focus:ring-violet-800 focus:ring-opacity-60 active:bg-violet-900">
            Find My Size
          </button>
          <Link
            to="/shoes"
            className="flex flex-row text-justify bg-red-500 px-6 py-4 rounded-xl text-white w-fit shadow-sm text-xl cursor-pointer hover:shadow-none hover:bg-red-600 hover:text-gray-100 focus:outline-none focus:ring focus:ring-offset-2 focus:ring-red-600 focus:ring-opacity-60 active:bg-red-700"
          >
            See Shoes <ArrowRightIcon className="h-7 w-7 ml-2 mt-0.5" />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Landing;
