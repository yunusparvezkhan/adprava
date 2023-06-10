import React, { useEffect, useState } from 'react';
import './styles/modal.css';

const Modal = ({ closeModal }) => {
    const [boxClickHandler, setBoxClickHandler] = useState(false);
    const [bgClickHandler, setBgClickHandler] = useState(false);

    useEffect(() => {
        if (bgClickHandler && !boxClickHandler) {
            closeModal();
        } else {
            setBoxClickHandler(false);
            setBgClickHandler(false);
        }
    }, [boxClickHandler, bgClickHandler])

    return (
        <div>
            <div className='modal-background' onClick={() => setBgClickHandler(true)} >
                <div className='modal-box' onClick={() => setBoxClickHandler(true)} >

                </div>
            </div>
        </div >
    )
}

export default Modal