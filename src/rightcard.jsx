import React from "react";
import { BsArrowRightCircleFill } from "react-icons/bs";


function RightCard(props) {
  return (
    <div className=" w-50 flex flex-row gap-6">
      <div
  style={props.style}
  className="bg-cover bg-center bg-no-repeat h-130 w-64 mt-20 rounded-3xl bg-black relative flex flex-col justify-end p-4 text-white"
>
  <div className="h-120 w-64 bg-transparent pt-1 rounded-2xl flex flex-col gap-1.5">
    <div className="h-7 w-7 mt-0 text-center text-lg font-bold bg-white rounded-full text-black">{props.id}</div>
    <p className="mt-75 mb-3 text-xs leading-tight opacity-90">
      {props.content}
    </p>
    <div className="flex gap-20 mt-5">
      <button className="h-9 w-30 bg-blue-600 hover:bg-blue-700 text-xs rounded-full font-medium transition-colors cursor-pointer">
        {props.Tag}
      </button>
      <button className="flex items-center justify-center rounded-full cursor-pointer text-blue-500">
       <BsArrowRightCircleFill className="w-7 h-9" />
      </button>

    </div>
    </div>
  </div>
  </div>
  );
}

export default RightCard;