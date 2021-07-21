import React from 'react';

export const MainContentCard = () => {
  return (
    <div className="mb-14">
      <div
        className="rounded-md"
        style={{
          height: '440px',
          backgroundImage:
            'url(https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/1200px-Image_created_with_a_mobile_phone.png)',
        }}
      ></div>
      <div
        className="mx-4 rounded-md p-7"
        style={{
          marginTop: '-125px',
          height: '250px',
          backgroundColor: 'white',
          boxShadow: '0px 3px 10px rgba(0, 0, 0, 0.1)',
        }}
      >
        <div className="flex items-center justify-center w-16 h-6 text-sm text-white rounded-md bg-bluebird">
          Vehicle
        </div>
        <div className="mt-5 text-2xl font-bold text-gray-900">
          One of Saturn’s largest rings may be newer than anyone
        </div>
        <div className="mt-4 text-sm italic text-gray-500">
          Rickie Baroch - June 6, 2019
        </div>
        <div className="mt-3 text-gray-500 text-md">
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantium, totam rem sed ut perspiciatis unde
          omnis iste natus error sit voluptatem accusantium doloremque
          laudantium, totam rem
        </div>
      </div>
    </div>
  );
};
