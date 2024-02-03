import { FC, SVGProps } from "react";

const BackArrowIcon: FC<SVGProps<SVGSVGElement>> = () => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M16.62 2.99001C16.5039 2.8736 16.366 2.78124 16.2141 2.71823C16.0622 2.65521 15.8994 2.62277 15.735 2.62277C15.5706 2.62277 15.4078 2.65521 15.2559 2.71823C15.1041 2.78124 14.9661 2.8736 14.85 2.99001L6.54 11.3C6.4473 11.3925 6.37375 11.5024 6.32357 11.6234C6.27339 11.7444 6.24756 11.874 6.24756 12.005C6.24756 12.136 6.27339 12.2657 6.32357 12.3866C6.37375 12.5076 6.4473 12.6175 6.54 12.71L14.85 21.02C15.34 21.51 16.13 21.51 16.62 21.02C17.11 20.53 17.11 19.74 16.62 19.25L9.38 12L16.63 4.75001C17.11 4.27001 17.11 3.47001 16.62 2.99001Z"
        fill="white"
      />
    </svg>
  );
};

export default BackArrowIcon;
