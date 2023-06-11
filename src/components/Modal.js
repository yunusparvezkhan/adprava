import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
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
        modalConformation(false)
        closeModal();
    }

    const handleAffClick = () => {
        modalConformation(true)
        closeModal();
    }

    return ReactDOM.createPortal(
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
        </div >,
        document.querySelector('.modal-container')
    );
}

export default Modal