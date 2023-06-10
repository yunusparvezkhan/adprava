import React from 'react'
import Modal from '../components/Modal'
import Button from '../components/Button.js'

const ModalPage = () => {
    return (
        <div>
            <h2 className='text-3xl mt-5 ml-20 font-black text-violet-700' >Modal Page</h2>
            <div className='ml-20 mt-10' >
                <Button primary rounded>Show Modal</Button>
            </div>
            <Modal />
        </div>
    )
}

export default ModalPage