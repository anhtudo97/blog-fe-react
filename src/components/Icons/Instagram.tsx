import React, { SVGProps } from 'react';

export const Instagram = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="34"
      height="34"
      fill="none"
      viewBox="0 0 34 34"
      {...props}
    >
      <rect width="34" height="34" fill="#373737" rx="3"></rect>
      <path
        fill="#fff"
        fillRule="evenodd"
        d="M13.813 8.5h6.374a5.313 5.313 0 015.313 5.313v6.374a5.313 5.313 0 01-5.313 5.313h-6.375A5.313 5.313 0 018.5 20.187v-6.375A5.313 5.313 0 0113.813 8.5zm6.374 15.406a3.723 3.723 0 003.72-3.718v-6.375a3.723 3.723 0 00-3.72-3.72h-6.375a3.723 3.723 0 00-3.718 3.72v6.374a3.723 3.723 0 003.719 3.72h6.374z"
        clipRule="evenodd"
      ></path>
      <path
        fill="#fff"
        fillRule="evenodd"
        d="M12.75 17a4.25 4.25 0 118.5 0 4.25 4.25 0 01-8.5 0zm1.594 0A2.66 2.66 0 0017 19.656 2.66 2.66 0 0019.656 17 2.66 2.66 0 0017 14.344 2.66 2.66 0 0014.344 17z"
        clipRule="evenodd"
      ></path>
      <path
        fill="#fff"
        d="M21.604 13.458a1.063 1.063 0 100-2.125 1.063 1.063 0 000 2.125z"
      ></path>
    </svg>
  );
};
