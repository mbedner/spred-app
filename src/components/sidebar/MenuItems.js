import React from 'react'

function MenuItems() {
    return (
        <div className="p-4 flex flex-col justify-between h-full w-full">
            <ul>
                <li className="py-2 px-4 rounded mb-2 hover:bg-gray-100 flex items-center uppercase font-semibold text-sm tracking-wider"> <span>Home</span></li>
                <li className="py-2 px-4 rounded my-2 hover:bg-gray-100 flex items-center uppercase font-semibold text-sm tracking-wider"> <span>Tasks</span></li>
                <li className="py-2 px-4 rounded my-2 hover:bg-gray-100 flex items-center uppercase font-semibold text-sm tracking-wider"> <span>Calendar</span></li>
                <li className="py-2 px-4 rounded my-2 hover:bg-gray-100 flex items-center uppercase font-semibold text-sm tracking-wider"> <span>Team</span></li>
            </ul>
            <ul>
                <li className="py-2 px-4 rounded mb-2 hover:bg-gray-100 flex items-center uppercase font-semibold text-sm tracking-wider"> <span className="ml-3">Home</span></li>
            </ul>
        </div>
    )
}

export default MenuItems
