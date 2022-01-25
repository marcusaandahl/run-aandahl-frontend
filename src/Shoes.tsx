import React from 'react';

import NikeLogo from './assets/Nike';
import AirZoomTempo from './assets/air_zoom_tempo.png';

import Shoe from './Shoe';

const shoes = {
  logo: <NikeLogo className="w-10 m-3 mb-6 fill-black dark:fill-white" />,
  image: AirZoomTempo,
};

function Shoes() {
  return (
    <div className="bg-gray-100 w-full min-h-screen pt-20 dark:bg-gray-800">
      <div className="m-8">
        <Shoe data={shoes} />
      </div>
    </div>
  );
}

export default Shoes;
