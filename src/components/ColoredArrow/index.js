import React from "react";
import { SvgIcon } from "@mui/material";

function ColoredArrowIcon({ value }) {
  return (
    <>
      {value < 0 ? (
        <>
          <SvgIcon xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" sx={{ height: "10px", width: "10px" }}>
            <g transform="matrix(-2.809996-.004907 0.004907-2.809996 254.085599 254.52862)">
              <path
                d="M46.969,0.896c-1.041-1.194-2.897-1.194-3.937,0L13.299,35.011c-.932,1.072-.171,2.743,1.25,2.743h14.249v50.336c0,1.055.855,1.91,1.91,1.91h28.584c1.055,0,1.91-.855,1.91-1.91v-50.336h14.249c1.421,0,2.182-1.671,1.25-2.743L46.969,0.896Z"
                transform="translate(-.355871 0.000621)"
                fill="#f00"
                strokeMiterlimit="10"
              />
            </g>
          </SvgIcon>
        </>
      ) : (
        <>
          <SvgIcon xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" sx={{ height: "10px", width: "10px" }}>
            <defs>
              <filter id="elxYZ0mbF6k2-filter" x="-150%" width="400%" y="-150%" height="400%">
                <feColorMatrix id="elxYZ0mbF6k2-filter-hue-rotate-0" type="hueRotate" values="112" result="result" />
              </filter>
            </defs>
            <g transform="matrix(2.810004 0 0 2.810004 1.692714 1.091233)" filter="url(#elxYZ0mbF6k2-filter)">
              <path
                d="M46.969,0.896c-1.041-1.194-2.897-1.194-3.937,0L13.299,35.011c-.932,1.072-.171,2.743,1.25,2.743h14.249v50.336c0,1.055.855,1.91,1.91,1.91h28.584c1.055,0,1.91-.855,1.91-1.91v-50.336h14.249c1.421,0,2.182-1.671,1.25-2.743L46.969,0.896Z"
                transform="translate(-.355871 0.000621)"
                fill="#f00"
                strokeMiterlimit="10"
              />
            </g>
          </SvgIcon>
        </>
      )}
    </>
  );
}

export default ColoredArrowIcon;
