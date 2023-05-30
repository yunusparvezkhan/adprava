import React from 'react';
import { HiQuestionMarkCircle } from 'react-icons/hi';
import { MdQuestionAnswer } from 'react-icons/md';

const Accordion = () => {

    const qnadata = [
        {
            q: "Who invented Gravity?",
            a: "Ancient Indian Rishi, Brahmagupta II invented gravity."
        },
        {
            q: "Who invented Surgery?",
            a: "Ancient Indian Medical practisioner Sushruta Samhita came up with the theory of surgery."
        },
        {
            q: "Who invented Electromagnetic Waves?",
            a: "Profound British Indian Bengali Scientist Acharya jagadish Chandra Bose invented Electromagnetic Waves."
        },
        {
            q: "Who discovered the value of pi?",
            a: "Rishi Aryabhatta calculated the value of pi to be 62832/20000 = 3.1416"
        },
        {
            q: "Who discovered the shape of the earth?",
            a: "Aryabhatta was among the first people who gave the oval shape theory of earth."
        },

    ]

    const renderData = () => {
        return qnadata.map(({ q, a }) => {
            return (
                <div className='ml-20 mt-7'>
                    <div className='flex items-center'>
                        <HiQuestionMarkCircle className='mr-2' />
                        <h3 className='text-xl font-medium'>{q}</h3>
                    </div>
                    <div className='flex items-center'>
                        <MdQuestionAnswer className='mr-2' />
                        <p className='text'>{a}</p>
                    </div>
                </div>
            )
        })
    }

    return (
        <div>
            <h1 className='text-3xl mt-5 ml-20 font-black text-violet-700' >Accordion</h1>
            <div>
                {renderData()}
            </div>
        </div>
    )
}

export default Accordion