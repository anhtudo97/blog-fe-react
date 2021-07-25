import React, { SVGProps } from 'react';

export const ArrowNextIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="6"
      height="10"
      fill="none"
      viewBox="0 0 6 10"
      {...props}
    >
      <path
        stroke="#171717"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.333"
        d="M1 9l4-4-4-4"
      ></path>
    </svg>
  );
};
