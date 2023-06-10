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

    let modalmsg = `Lorem Ipsum is simply dummy text of the printing and 
    typesetting industry. Lorem Ipsum has been the industry's standard dummy 
    text ever since the 1500s, when an unknown printer took a galley of type 
    and scrambled it to make a type specimen book. It has survived not only 
    five centuries, but also the leap into electronic typesetting, remaining 
    essentially unchanged. It was popularised in the 1960s with the release of 
    Letraset sheets containing Lorem Ipsum passages, and more recently with desktop 
    publishing software like Aldus PageMaker including versions of Lorem Ipsum. 
    vidfnvidufv uvidjfv dfvundfjiv ufvdojf fuvidfjvn dfuvnifuvndifjvn`

    const rendermodal = () => {
        if (modalsts) {
            return <Modal message={modalmsg} closeModal={handleCloseModal} modalConformation={handleModalConformation} />
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