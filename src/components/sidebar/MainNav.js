import { HiOutlinePlusCircle } from "react-icons/hi";
import { HiOutlineCalendar } from "react-icons/hi";
import { HiOutlineChartBar } from "react-icons/hi";
import { HiOutlineClipboardList } from "react-icons/hi";
import { HiOutlineDotsHorizontal } from "react-icons/hi";
import { HiOutlineBell } from "react-icons/hi";
import { HiOutlineQuestionMarkCircle } from "react-icons/hi";
import React, {useState} from "react";
import Modal from "../Modal";

const MainNav = () => {

    const [ isOpen, setIsOpen ] = useState(false)

    const handleOpen = () => {
        setIsOpen(true)
    }


    return ( 
        <>
        <div className="flex justify-between flex-col py-5 px-2 bg-gradient-to-b from-blue-500 to-indigo-500">
            <ul>
                <li className="text-white text-2xl text-center mb-3 flex flex-col items-center rounded p-1 cursor-pointer hover:bg-blue-700" onClick={ handleOpen }><HiOutlinePlusCircle/><span className="leading-tight text-2xs opacity-80">Add</span></li>
                <li className="text-white text-2xl text-center mb-3 flex flex-col items-center rounded p-1 cursor-pointer hover:bg-blue-700"><HiOutlineCalendar/><span className="leading-tight text-2xs opacity-80">Calendar</span></li>
                <li className="text-white text-2xl text-center mb-3 flex flex-col items-center rounded p-1 cursor-pointer hover:bg-blue-700"><HiOutlineClipboardList/><span className="leading-tight text-2xs opacity-80">Tasks</span></li>
                <li className="text-white text-2xl text-center mb-3 flex flex-col items-center rounded p-1 cursor-pointer hover:bg-blue-700"><HiOutlineChartBar/><span className="leading-tight text-2xs opacity-80">Reports</span></li>
                <li className="group text-white text-2xl text-center mb-4 flex flex-col items-center rounded p-1 relative cursor-pointer hover:bg-blue-700"><HiOutlineDotsHorizontal/>
                    <ul className="text-black bg-white border py-1 px-1 absolute rounded text-sm -bottom-24 left-0 shadow hidden group-hover:block">
                        <li className="py-1 px-1 rounded mb-1 hover:bg-gray-100 flex items-center tracking-wider">Tooltip</li>
                        <li className="py-1 px-1 rounded mb-1 hover:bg-gray-100 flex items-center tracking-wider">Tooltip</li>
                        <li className="py-1 px-1 rounded hover:bg-gray-100 flex items-center tracking-wider">Tooltip</li>
                    </ul>
                </li>
            </ul>
            <ul>
                <li className="text-white text-2xl text-center mb-3 cursor-pointer flex flex-col items-center justify-center rounded p-1 hover:bg-indigo-700"><HiOutlineBell/></li>
                <li className="text-white text-2xl text-center cursor-pointer flex flex-col items-center justify-center rounded p-1 hover:bg-indigo-700"><HiOutlineQuestionMarkCircle/></li>
            </ul>
        </div>
        <Modal open={isOpen} />

        {/* {console.log(isOpen)} */}
        </>
     );
}
 
export default MainNav;