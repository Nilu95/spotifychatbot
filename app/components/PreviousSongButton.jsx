import React, { useEffect, useTransition, useState } from "react";
import previousSong from "../actions/previousSong";
import { BsSkipBackwardFill } from "react-icons/bs";

const PreviousSongButton = ({ token }) => {
   const handleClick = () => {
      previousSong(token);
   };

   return (
      <button
         type="button"
         className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow"
         onClick={handleClick}
      >
         <BsSkipBackwardFill />
      </button>
   );
};

export default PreviousSongButton;
