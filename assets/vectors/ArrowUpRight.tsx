import React from "react";

function ArrowUpRight({color}: {color?: string}) {
  return (
    <div>
      <svg viewBox="0 0 65 66" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M25.9049 20.817H44.6825M44.6825 20.817V39.5946M44.6825 20.817L20.5399 44.9597"
          stroke={color ? color : "white"}
          strokeWidth="3.79365"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
}

export default ArrowUpRight;
