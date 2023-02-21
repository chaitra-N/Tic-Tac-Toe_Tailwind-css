import React from "react";

const Sqaure = ({ val, checkSquare }) => {
  return (
    <div
      className='flex-[33%] h-full border cursor-pointer grid place-items-center text-3xl text-[black] border-solid border-[black] active:bg-[rgb(255,0,191)];
  font-family: Arial, Helvetica, sans-seriff'
      onClick={checkSquare}
    >
      {val}
    </div>
  );
};

export default Sqaure;
