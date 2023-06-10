import React, { useEffect, useState } from 'react';
import './styles/modal.css';
import Button from './Button';

const Modal = ({ closeModal, modalConformation }) => {
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
        modalConformation('Negetive')
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
                    <div className='flex items-center'>
                        <p className='block p-20 text-xl '>
                            Hey, here is some message for you. This is a modal box a a a a a and you have to accept the conditions.
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