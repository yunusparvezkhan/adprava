import React, { useState } from 'react'
import Modal from '../components/Modal'
import Button from '../components/Button.js'

const ModalPage = () => {
    const [modalsts, setmodalsts] = useState(false);
    const [modalConf, setModalConf] = useState();

    const handleBtnClick = () => {
        setmodalsts(!modalsts)
    }

    const handleCloseModal = () => {
        setmodalsts(false);
    }

    const handleModalConformation = (status) => {
        setModalConf(status)
    }

    const rendermodal = () => {
        if (modalsts) {
            return <Modal closeModal={handleCloseModal} modalConformation={handleModalConformation} />
        } else {
            return;
        }
    }
    return (
        <div>
            <h2 className='text-3xl mt-5 ml-20 font-black text-violet-700' >Modal Page</h2>
            <div className='ml-20 mt-10' >
                <Button primary rounded onClick={handleBtnClick} >Show Modal</Button>
            </div>
            <div>
                {rendermodal()}
            </div>

            {/* This heading is solely built for testing & conformation purposes */}
            <h2 className='text-xl' >
                Modal Status : {modalConf}
            </h2>

        </div>
    )
}

export default ModalPage