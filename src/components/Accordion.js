import React from 'react'

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

    return (
        <div>
            <h1 className='text-2xl text-center mt-5' >Accordion</h1>
        </div>
    )
}

export default Accordion