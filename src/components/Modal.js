import React, { useState } from 'react'
import { HiX } from "react-icons/hi";


function Modal({open}) {
    const [ isOpen, setIsOpen ] = useState(open)

    console.log(isOpen)

    const handleClose = () => {
        setIsOpen(false)
    }


    return (
        <div id="modal" className={`z-20 h-full w-full bg-black bg-opacity-70 fixed flex items-center justify-center top-0 right-0 ${isOpen ? "block" : "hidden" }`}>

            <div id="modal-content" className="p-4 bg-white rounded shadow m-auto w-1/2">
                <button onClick={handleClose}>< HiX /></button>
            </div>
            
        </div>
    )
}

export default Modal
