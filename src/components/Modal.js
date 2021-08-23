import React from 'react'
import { HiX } from "react-icons/hi";


function Modal({show}) {

    return (
        <div id="modal" className="h-full w-full bg-black fixed top-0 right-0" 
            style={{
                display: show ? 'block' : 'hidden'
            }}
        >
            <div id="modal-content" className="p-4 bg-white rounded shadow m-auto w-1/2">
                <button onClick={()=>setIsShowing(false)}>< HiX /></button>
            </div>
            
        </div>
    )
}

export default Modal
