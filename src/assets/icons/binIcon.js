import React from "react";

export default function BinIcon(props) {
  return (
    <svg
      stroke="currentColor"
      fill="currentColor"
      stroke-width="0"
      viewBox="0 0 512 512"
      height="1em"
      width="1em"
      xmlns="http://www.w3.org/2000/svg"
      onClick={props?.onClick}
      id={props?.id}
    >
      <path
        fill="none"
        id={props?.id}
        d="M337.46 240 312 214.54l-56 56-56-56L174.54 240l56 56-56 56L200 377.46l56-56 56 56L337.46 352l-56-56 56-56z"
      ></path>
      <path
        fill="none"
        id={props?.id}
        d="M337.46 240 312 214.54l-56 56-56-56L174.54 240l56 56-56 56L200 377.46l56-56 56 56L337.46 352l-56-56 56-56z"
      ></path>
      <path
        id={props?.id}
        d="m64 160 29.74 282.51A24 24 0 0 0 117.61 464h276.78a24 24 0 0 0 23.87-21.49L448 160zm248 217.46-56-56-56 56L174.54 352l56-56-56-56L200 214.54l56 56 56-56L337.46 240l-56 56 56 56z"
      ></path>
      <rect
        id={props?.id}
        width="448"
        height="80"
        x="32"
        y="48"
        rx="12"
        ry="12"
      ></rect>
    </svg>
  );
}
