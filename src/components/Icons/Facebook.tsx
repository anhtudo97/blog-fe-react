import React, { SVGProps } from 'react';

export const Facebook = (props: SVGProps<SVGSVGElement>) => {
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
        d="M20.783 8.211l-1.999-.003c-2.246 0-3.697 1.492-3.697 3.8v1.753h-2.01a.315.315 0 00-.315.315v2.539c0 .174.141.315.315.315h2.01v6.406c0 .174.14.315.314.315h2.622a.315.315 0 00.315-.315V16.93h2.35c.174 0 .314-.141.314-.315l.001-2.54a.316.316 0 00-.314-.314h-2.351v-1.486c0-.713.17-1.076 1.098-1.076h1.347a.315.315 0 00.314-.315V8.526a.315.315 0 00-.314-.315z"
      ></path>
    </svg>
  );
};
