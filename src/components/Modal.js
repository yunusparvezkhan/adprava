import React, { useEffect, useState } from 'react';
import './styles/modal.css';
import Button from './Button';

const Modal = ({ heading, message, closeModal, modalConformation }) => {
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

    const handleNegClick = () => {
        modalConformation('Negative')
        closeModal();
    }

    const handleAffClick = () => {
        modalConformation('Affirmative')
        closeModal();
    }

    return (
        <div>
            <div className='modal-background' onClick={() => setBgClickHandler(true)} >
                <div className='modal-box' onClick={() => setBoxClickHandler(true)} >
                    <h3 className='text-2xl text-center mt-10'>{heading}</h3>
                    <div className='flex items-center'>
                        <p className='block px-20 py-10 mb-20 text-xl '>
                            {message}
                        </p>
                    </div>
                    <div className='modal-btns'>
                        <div className='flex'>
                            <div className='modal-neg-btn' >
                                <Button danger onClick={handleNegClick} >Cancel</Button>
                            </div>
                            <div className='modal-aff-btn' >
                                <Button success onClick={handleAffClick}>Proceed</Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Modal