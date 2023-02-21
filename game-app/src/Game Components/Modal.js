import React from "react";
import { FaTimes } from "react-icons/fa";
import result from "../Assets/winner.jpg";
const Modal = ({ winner, openModal, onClose }) => {
  if (!openModal) return null;
  return (
    <div className='bg-[rgba(0,0,0,0.5)] fixed w-full h-full'>
      <div className='max-w-[600px] w-full fixed -translate-x-2/4 -translate-y-2/4 flex bg-white shadow-[0px_0px_18px_0px_rgba(0,0,0,0.75)] rounded-lg left-2/4 top-[40%]'>
        <img
          src={result}
          alt='image'
          className='w-[250px] object-cover rounded-tl-lg rounded-bl-lg'
        />
        <div className='w-full'>
          <p onClick={onClose} className='fixed right-2 top-0'>
            <FaTimes />
          </p>
          <div className='flex flex-col justify-center text-center mt-12 px-8 py-'>
            <p>Winner : {winner.winner}</p>
          </div>
          <div className='flex p-4'>
            <button
              onClick={() => {
                onClose();
              }}
              className='bg-[#411b57]'
            >
              Restart game
            </button>
            <button
              className='bg-[#ba72a9]'
              onClick={() => {
                onClose();
              }}
            >
              No, Thanks!
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
