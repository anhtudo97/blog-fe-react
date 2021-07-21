import React from 'react';
interface VerticalCardProps {
  image: string;
  author: string;
  date: string;
}

export const VerticalCard = () => {
  return (
    <div
      className="flex flex-col justify-between col-start-1 col-end-2 p-4 bg-black bg-cover rounded-md"
      style={{
        height: '560px',
        backgroundImage:
          'url(https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/1200px-Image_created_with_a_mobile_phone.png)',
      }}
    >
      <div className="flex items-center justify-center w-16 h-6 text-sm text-white rounded-md bg-bluebird">
        Vehicle
      </div>
      <div>
        <div className="text-sm text-white">Rickie Baroch - June 6, 2019</div>
        <div className="text-2xl font-bold text-white">
          One of Saturn’s largest rings may be newer than anyone
        </div>
      </div>
    </div>
  );
};
