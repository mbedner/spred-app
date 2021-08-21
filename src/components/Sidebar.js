import { HiOutlineHome } from "react-icons/hi";

const Sidebar = () => {
    return ( 
        <section id="sidebar" className="w-1/8 border-r h-full bg-white flex flex-row">
            <ul className="py-5 px-3 bg-gradient-to-br from-blue-500 to-indigo-500">
                <li className="bg-white text-2xl rounded-full w-10 h-10 flex items-center justify-center mb-5"><HiOutlineHome /></li>
                <li className="bg-white text-2xl rounded-full w-10 h-10 flex items-center justify-center mb-5"><HiOutlineHome /></li>
                <li className="bg-white text-2xl rounded-full w-10 h-10 flex items-center justify-center mb-5"><HiOutlineHome /></li>
                <li className="bg-white text-2xl rounded-full w-10 h-10 flex items-center justify-center mb-5"><HiOutlineHome /></li>

            </ul>
            <div className="p-4 flex flex-col justify-between h-full w-full">
                <ul>
                    <li className="py-2 px-4 rounded mb-2 hover:bg-gray-100 flex items-center uppercase font-semibold text-sm tracking-wider"><HiOutlineHome /> <span className="ml-3">Home</span></li>
                    <li className="py-2 px-4 rounded my-2 hover:bg-gray-100 flex items-center uppercase font-semibold text-sm tracking-wider"><HiOutlineHome /> <span className="ml-3">Tasks</span></li>
                    <li className="py-2 px-4 rounded my-2 hover:bg-gray-100 flex items-center uppercase font-semibold text-sm tracking-wider"><HiOutlineHome /> <span className="ml-3">Calendar</span></li>
                    <li className="py-2 px-4 rounded my-2 hover:bg-gray-100 flex items-center uppercase font-semibold text-sm tracking-wider"><HiOutlineHome /> <span className="ml-3">Team</span></li>
                </ul>
                <ul>
                    <li className="py-2 px-4 rounded mb-2 hover:bg-gray-100 flex items-center uppercase font-semibold text-sm tracking-wider"><HiOutlineHome /> <span className="ml-3">Home</span></li>
                </ul>
            </div>
        </section>
     );
}
 
export default Sidebar;