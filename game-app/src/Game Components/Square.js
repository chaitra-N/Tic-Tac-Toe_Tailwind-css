import React from "react";

const Sqaure = ({ val, checkSquare }) => {
  return (
    <div
      className='flex-[33%] h-full border cursor-pointer grid place-items-center text-3xl text-[black] border-solid border-[black];
  font-family: Arial, Helvetica, sans-serif'
      onClick={checkSquare}
    >
      {val}
    </div>
  );
};

export default Sqaure;
