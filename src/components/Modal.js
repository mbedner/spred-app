import React, { useRef, useEffect, useCallback} from 'react'
import { useSpring, animated} from 'react-spring'
import { HiX } from "react-icons/hi";


const Modal = ({showModal, setShowModal}) => {
    const modalRef = useRef()

    const animation = useSpring({
        config: {
            duration: 250
        },
        transform: showModal ? `translateY(0)` : `translateY(-50px)`,
        opacity: showModal ? 1 : 0,
        transition: showModal ? 'ease' : null
    })

    const closeModal = e => {
        if(modalRef.current === e.target) {
            setShowModal(false)
        }
    }

    const keyPress = useCallback(e => {
        if(e.key === 'Escape' && showModal) {
            setShowModal(false)
        }

    }, [setShowModal, showModal])

    useEffect(()=> {
        document.addEventListener('keydown', keyPress);
        return () => document.removeEventListener('keydown', keyPress)
    }, [keyPress])

    return (
        <>
        {showModal ? (
        <div id="modal" className="z-20 h-full w-full bg-black bg-opacity-70 fixed flex items-center justify-center top-0 right-0" ref={modalRef} onClick={closeModal}>
            <animated.div style={animation} id="modal-content" className="p-4 bg-white rounded shadow m-auto w-1/2">
                <button onClick={() => setShowModal(prev => !prev)}>< HiX /></button>
            </animated.div>
        </div> 
        ) : null }
        </>
    )
}

export default Modal
