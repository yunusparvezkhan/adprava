import React, { useEffect, useState } from 'react'
import Modal from '../components/Modal'
import Button from '../components/Button.js'
import './styles/modalpage.css'

const ModalPage = () => {
    const [modalsts, setmodalsts] = useState(false);
    const [modalConf, setModalConf] = useState();
    const [bgcolor, setbgcolor] = useState('bg-white');

    useEffect(() => {
        if (modalConf) {
            setbgcolor('bg-purple-200');
        } else if (!modalConf) {
            setbgcolor('bg-white');
        }
    }, [modalConf])

    const handleBtnClick = () => {
        setmodalsts(!modalsts)
    }

    const handleCloseModal = () => {
        setmodalsts(false);
    }

    const handleModalConformation = (status) => {
        setModalConf(status)
    }

    let modalheading = '⚠️ Color Changing Warning ⚠️'

    let modalmsg = `If you proceed the Background Color of the Page will change 😜`

    const rendermodal = () => {
        if (modalsts) {
            return <Modal message={modalmsg} heading={modalheading} closeModal={handleCloseModal} modalConformation={handleModalConformation} />
        } else {
            return;
        }
    }
    return (
        <div className={`modal-page-container ${bgcolor} `}>
            <h2 className='text-3xl mt-5 ml-20 font-black text-violet-700' >Modal Page</h2>
            <div className='ml-20 mt-10' >
                <Button primary rounded onClick={handleBtnClick} >Show Modal</Button>
            </div>
            <div>
                {rendermodal()}
            </div>

            {/* This heading is solely built for testing & conformation purposes */}
            <h2 className='text-2xl font-bold ml-20 pl-5 mt-20 pt-20' >
                Modal Status : {modalConf === true ? "Affirmative" : ""} {modalConf === false ? "Negative" : ""}
            </h2>

        </div>
    )
}

export default ModalPage