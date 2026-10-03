import React from "react";
function Navbar(){
    return(
    <div className="flex gap-220 pt-8 pl-8">
        <div><button className="h-8 w-39 flex items-center justify-center rounded-full  bg-black text-white text-sm uppercase">Target Audience</button></div>
        <div><button className="h-6 w-55 rounded-full bg-gray-300 rounded-full text-black uppercase text-xs cursor-pointer bold ">Digital Banking Plateform</button></div>
        
    </div>
    ) 
}
export default Navbar;