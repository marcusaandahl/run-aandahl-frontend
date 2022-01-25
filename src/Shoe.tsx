import React, { ReactElement } from 'react';

interface propsTypes {
  data: {
    image: string;
    logo: ReactElement;
  };
}

function Shoe(props: propsTypes) {
  return (
    <div
      id="cont"
      className="max-w-sm rounded-lg overflow-hidden shadow-lg bg-white dark:bg-gray-700 group hover:scale-108 hover:cursor-pointer active:ring active:ring-slate-400 active:ring-opacity-60 active:shadow-none focus:outline-none focus:ring focus:ring-slate-400 focus:ring-opacity-60 focus:shadow-none"
    >
      <img
        className="w-full object-cover object-center h-80 group-hover:opacity-80"
        src={props.data.image}
        alt="Sunset in the mountains"
      />
      <div className="content p-4 flex flex-row items-center place-content-between">
        <div className="space-y-2">
          {/* <props.data.logo /className="w-10 m-3 mb-6 fill-black dark:fill-white"> */}
          {props.data.logo}
          <h3 className="text-gray-900 dark:text-white text-lg font-bold">
            Nike Air Zoom Tempo Run
          </h3>
          <p className="text-gray-500 dark:text-gray-300 text-base">
            Men's Tempo Run Shoes
          </p>
        </div>
        <p className="text-gray-900 dark:text-white text-xl">$200</p>
      </div>
    </div>
  );
}

export default Shoe;
