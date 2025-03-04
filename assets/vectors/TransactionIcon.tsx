import React from "react";

function TransactionIcon({ color }: { color?: string }) {
  return (
    <div>
      <svg viewBox="0 0 69 69" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M60.3889 59.833H9.38892C8.26211 59.8318 7.18179 59.3837 6.38502 58.5869C5.58824 57.7901 5.1401 56.7098 5.13892 55.583V44.958H9.38892V55.583H60.3889V44.958H64.6389V55.583C64.6377 56.7098 64.1896 57.7901 63.3928 58.5869C62.596 59.3837 61.5157 59.8318 60.3889 59.833Z"
          fill={color ? color : "#A6AAB3"}
        />
        <path
          d="M54.0139 44.958H15.7639V49.208H54.0139V44.958Z"
          fill={color ? color : "#A6AAB3"}
        />
        <path
          d="M54.0139 34.333H15.7639V38.583H54.0139V34.333Z"
          fill={color ? color : "#A6AAB3"}
        />
        <path
          d="M54.0139 23.708H15.7639V27.958H54.0139V23.708Z"
          fill={color ? color : "#A6AAB3"}
        />
        <path
          d="M54.0139 13.083H15.7639V17.333H54.0139V13.083Z"
          fill={color ? color : "#A6AAB3"}
        />
      </svg>
    </div>
  );
}

export default TransactionIcon;
