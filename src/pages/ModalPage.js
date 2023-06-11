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

            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc enim eros, efficitur pharetra metus quis, dignissim lobortis lacus. Nam ut magna ante. Mauris at elit urna. Sed euismod volutpat sapien, quis varius justo elementum non. Maecenas placerat turpis felis, ut volutpat eros elementum quis. Etiam congue ipsum sed purus venenatis pellentesque. Duis a leo sit amet enim blandit hendrerit ac id nulla. Pellentesque bibendum lacinia ex, eget euismod justo laoreet a. Proin pulvinar ornare est. Vestibulum scelerisque ut neque non porta.

                Donec id diam sed metus auctor sollicitudin vel vitae enim. Aenean lacus velit, laoreet maximus egestas eget, accumsan id justo. Integer ut mauris venenatis, tempor lacus at, iaculis nisi. Curabitur ut mi suscipit, dapibus felis quis, sagittis ante. Aliquam erat volutpat. Mauris tempus ipsum nec lectus efficitur, at tristique lectus gravida. Fusce maximus, erat vulputate ornare cursus, turpis mauris bibendum ipsum, vel suscipit purus lectus vitae justo. Suspendisse potenti. Curabitur eget massa semper, porttitor nunc at, ornare arcu. Aliquam at ex imperdiet, sagittis nisi sed, vulputate odio.

                Donec pellentesque ipsum quis purus placerat dignissim. Quisque mollis purus eget nibh pellentesque ultricies. Sed dui velit, luctus ac aliquet in, finibus id neque. Phasellus molestie neque orci, id finibus ante congue sit amet. Integer faucibus luctus massa at vulputate. Curabitur rutrum metus vel bibendum egestas. Sed vel ultricies dolor, vitae gravida risus. Pellentesque lacinia sodales lectus, sed tristique odio. Proin convallis leo vitae bibendum efficitur. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nulla scelerisque eros vel purus dignissim dictum. Nullam non elit a odio dapibus ullamcorper eu sit amet orci. Nam volutpat nibh id nulla dictum bibendum. Praesent molestie ex sed finibus suscipit.
            </p>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc enim eros, efficitur pharetra metus quis, dignissim lobortis lacus. Nam ut magna ante. Mauris at elit urna. Sed euismod volutpat sapien, quis varius justo elementum non. Maecenas placerat turpis felis, ut volutpat eros elementum quis. Etiam congue ipsum sed purus venenatis pellentesque. Duis a leo sit amet enim blandit hendrerit ac id nulla. Pellentesque bibendum lacinia ex, eget euismod justo laoreet a. Proin pulvinar ornare est. Vestibulum scelerisque ut neque non porta.

                Donec id diam sed metus auctor sollicitudin vel vitae enim. Aenean lacus velit, laoreet maximus egestas eget, accumsan id justo. Integer ut mauris venenatis, tempor lacus at, iaculis nisi. Curabitur ut mi suscipit, dapibus felis quis, sagittis ante. Aliquam erat volutpat. Mauris tempus ipsum nec lectus efficitur, at tristique lectus gravida. Fusce maximus, erat vulputate ornare cursus, turpis mauris bibendum ipsum, vel suscipit purus lectus vitae justo. Suspendisse potenti. Curabitur eget massa semper, porttitor nunc at, ornare arcu. Aliquam at ex imperdiet, sagittis nisi sed, vulputate odio.

                Donec pellentesque ipsum quis purus placerat dignissim. Quisque mollis purus eget nibh pellentesque ultricies. Sed dui velit, luctus ac aliquet in, finibus id neque. Phasellus molestie neque orci, id finibus ante congue sit amet. Integer faucibus luctus massa at vulputate. Curabitur rutrum metus vel bibendum egestas. Sed vel ultricies dolor, vitae gravida risus. Pellentesque lacinia sodales lectus, sed tristique odio. Proin convallis leo vitae bibendum efficitur. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nulla scelerisque eros vel purus dignissim dictum. Nullam non elit a odio dapibus ullamcorper eu sit amet orci. Nam volutpat nibh id nulla dictum bibendum. Praesent molestie ex sed finibus suscipit.
            </p>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc enim eros, efficitur pharetra metus quis, dignissim lobortis lacus. Nam ut magna ante. Mauris at elit urna. Sed euismod volutpat sapien, quis varius justo elementum non. Maecenas placerat turpis felis, ut volutpat eros elementum quis. Etiam congue ipsum sed purus venenatis pellentesque. Duis a leo sit amet enim blandit hendrerit ac id nulla. Pellentesque bibendum lacinia ex, eget euismod justo laoreet a. Proin pulvinar ornare est. Vestibulum scelerisque ut neque non porta.

                Donec id diam sed metus auctor sollicitudin vel vitae enim. Aenean lacus velit, laoreet maximus egestas eget, accumsan id justo. Integer ut mauris venenatis, tempor lacus at, iaculis nisi. Curabitur ut mi suscipit, dapibus felis quis, sagittis ante. Aliquam erat volutpat. Mauris tempus ipsum nec lectus efficitur, at tristique lectus gravida. Fusce maximus, erat vulputate ornare cursus, turpis mauris bibendum ipsum, vel suscipit purus lectus vitae justo. Suspendisse potenti. Curabitur eget massa semper, porttitor nunc at, ornare arcu. Aliquam at ex imperdiet, sagittis nisi sed, vulputate odio.

                Donec pellentesque ipsum quis purus placerat dignissim. Quisque mollis purus eget nibh pellentesque ultricies. Sed dui velit, luctus ac aliquet in, finibus id neque. Phasellus molestie neque orci, id finibus ante congue sit amet. Integer faucibus luctus massa at vulputate. Curabitur rutrum metus vel bibendum egestas. Sed vel ultricies dolor, vitae gravida risus. Pellentesque lacinia sodales lectus, sed tristique odio. Proin convallis leo vitae bibendum efficitur. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nulla scelerisque eros vel purus dignissim dictum. Nullam non elit a odio dapibus ullamcorper eu sit amet orci. Nam volutpat nibh id nulla dictum bibendum. Praesent molestie ex sed finibus suscipit.
            </p>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc enim eros, efficitur pharetra metus quis, dignissim lobortis lacus. Nam ut magna ante. Mauris at elit urna. Sed euismod volutpat sapien, quis varius justo elementum non. Maecenas placerat turpis felis, ut volutpat eros elementum quis. Etiam congue ipsum sed purus venenatis pellentesque. Duis a leo sit amet enim blandit hendrerit ac id nulla. Pellentesque bibendum lacinia ex, eget euismod justo laoreet a. Proin pulvinar ornare est. Vestibulum scelerisque ut neque non porta.

                Donec id diam sed metus auctor sollicitudin vel vitae enim. Aenean lacus velit, laoreet maximus egestas eget, accumsan id justo. Integer ut mauris venenatis, tempor lacus at, iaculis nisi. Curabitur ut mi suscipit, dapibus felis quis, sagittis ante. Aliquam erat volutpat. Mauris tempus ipsum nec lectus efficitur, at tristique lectus gravida. Fusce maximus, erat vulputate ornare cursus, turpis mauris bibendum ipsum, vel suscipit purus lectus vitae justo. Suspendisse potenti. Curabitur eget massa semper, porttitor nunc at, ornare arcu. Aliquam at ex imperdiet, sagittis nisi sed, vulputate odio.

                Donec pellentesque ipsum quis purus placerat dignissim. Quisque mollis purus eget nibh pellentesque ultricies. Sed dui velit, luctus ac aliquet in, finibus id neque. Phasellus molestie neque orci, id finibus ante congue sit amet. Integer faucibus luctus massa at vulputate. Curabitur rutrum metus vel bibendum egestas. Sed vel ultricies dolor, vitae gravida risus. Pellentesque lacinia sodales lectus, sed tristique odio. Proin convallis leo vitae bibendum efficitur. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nulla scelerisque eros vel purus dignissim dictum. Nullam non elit a odio dapibus ullamcorper eu sit amet orci. Nam volutpat nibh id nulla dictum bibendum. Praesent molestie ex sed finibus suscipit.
            </p>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc enim eros, efficitur pharetra metus quis, dignissim lobortis lacus. Nam ut magna ante. Mauris at elit urna. Sed euismod volutpat sapien, quis varius justo elementum non. Maecenas placerat turpis felis, ut volutpat eros elementum quis. Etiam congue ipsum sed purus venenatis pellentesque. Duis a leo sit amet enim blandit hendrerit ac id nulla. Pellentesque bibendum lacinia ex, eget euismod justo laoreet a. Proin pulvinar ornare est. Vestibulum scelerisque ut neque non porta.

                Donec id diam sed metus auctor sollicitudin vel vitae enim. Aenean lacus velit, laoreet maximus egestas eget, accumsan id justo. Integer ut mauris venenatis, tempor lacus at, iaculis nisi. Curabitur ut mi suscipit, dapibus felis quis, sagittis ante. Aliquam erat volutpat. Mauris tempus ipsum nec lectus efficitur, at tristique lectus gravida. Fusce maximus, erat vulputate ornare cursus, turpis mauris bibendum ipsum, vel suscipit purus lectus vitae justo. Suspendisse potenti. Curabitur eget massa semper, porttitor nunc at, ornare arcu. Aliquam at ex imperdiet, sagittis nisi sed, vulputate odio.

                Donec pellentesque ipsum quis purus placerat dignissim. Quisque mollis purus eget nibh pellentesque ultricies. Sed dui velit, luctus ac aliquet in, finibus id neque. Phasellus molestie neque orci, id finibus ante congue sit amet. Integer faucibus luctus massa at vulputate. Curabitur rutrum metus vel bibendum egestas. Sed vel ultricies dolor, vitae gravida risus. Pellentesque lacinia sodales lectus, sed tristique odio. Proin convallis leo vitae bibendum efficitur. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nulla scelerisque eros vel purus dignissim dictum. Nullam non elit a odio dapibus ullamcorper eu sit amet orci. Nam volutpat nibh id nulla dictum bibendum. Praesent molestie ex sed finibus suscipit.
            </p>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc enim eros, efficitur pharetra metus quis, dignissim lobortis lacus. Nam ut magna ante. Mauris at elit urna. Sed euismod volutpat sapien, quis varius justo elementum non. Maecenas placerat turpis felis, ut volutpat eros elementum quis. Etiam congue ipsum sed purus venenatis pellentesque. Duis a leo sit amet enim blandit hendrerit ac id nulla. Pellentesque bibendum lacinia ex, eget euismod justo laoreet a. Proin pulvinar ornare est. Vestibulum scelerisque ut neque non porta.

                Donec id diam sed metus auctor sollicitudin vel vitae enim. Aenean lacus velit, laoreet maximus egestas eget, accumsan id justo. Integer ut mauris venenatis, tempor lacus at, iaculis nisi. Curabitur ut mi suscipit, dapibus felis quis, sagittis ante. Aliquam erat volutpat. Mauris tempus ipsum nec lectus efficitur, at tristique lectus gravida. Fusce maximus, erat vulputate ornare cursus, turpis mauris bibendum ipsum, vel suscipit purus lectus vitae justo. Suspendisse potenti. Curabitur eget massa semper, porttitor nunc at, ornare arcu. Aliquam at ex imperdiet, sagittis nisi sed, vulputate odio.

                Donec pellentesque ipsum quis purus placerat dignissim. Quisque mollis purus eget nibh pellentesque ultricies. Sed dui velit, luctus ac aliquet in, finibus id neque. Phasellus molestie neque orci, id finibus ante congue sit amet. Integer faucibus luctus massa at vulputate. Curabitur rutrum metus vel bibendum egestas. Sed vel ultricies dolor, vitae gravida risus. Pellentesque lacinia sodales lectus, sed tristique odio. Proin convallis leo vitae bibendum efficitur. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nulla scelerisque eros vel purus dignissim dictum. Nullam non elit a odio dapibus ullamcorper eu sit amet orci. Nam volutpat nibh id nulla dictum bibendum. Praesent molestie ex sed finibus suscipit.
            </p>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc enim eros, efficitur pharetra metus quis, dignissim lobortis lacus. Nam ut magna ante. Mauris at elit urna. Sed euismod volutpat sapien, quis varius justo elementum non. Maecenas placerat turpis felis, ut volutpat eros elementum quis. Etiam congue ipsum sed purus venenatis pellentesque. Duis a leo sit amet enim blandit hendrerit ac id nulla. Pellentesque bibendum lacinia ex, eget euismod justo laoreet a. Proin pulvinar ornare est. Vestibulum scelerisque ut neque non porta.

                Donec id diam sed metus auctor sollicitudin vel vitae enim. Aenean lacus velit, laoreet maximus egestas eget, accumsan id justo. Integer ut mauris venenatis, tempor lacus at, iaculis nisi. Curabitur ut mi suscipit, dapibus felis quis, sagittis ante. Aliquam erat volutpat. Mauris tempus ipsum nec lectus efficitur, at tristique lectus gravida. Fusce maximus, erat vulputate ornare cursus, turpis mauris bibendum ipsum, vel suscipit purus lectus vitae justo. Suspendisse potenti. Curabitur eget massa semper, porttitor nunc at, ornare arcu. Aliquam at ex imperdiet, sagittis nisi sed, vulputate odio.

                Donec pellentesque ipsum quis purus placerat dignissim. Quisque mollis purus eget nibh pellentesque ultricies. Sed dui velit, luctus ac aliquet in, finibus id neque. Phasellus molestie neque orci, id finibus ante congue sit amet. Integer faucibus luctus massa at vulputate. Curabitur rutrum metus vel bibendum egestas. Sed vel ultricies dolor, vitae gravida risus. Pellentesque lacinia sodales lectus, sed tristique odio. Proin convallis leo vitae bibendum efficitur. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nulla scelerisque eros vel purus dignissim dictum. Nullam non elit a odio dapibus ullamcorper eu sit amet orci. Nam volutpat nibh id nulla dictum bibendum. Praesent molestie ex sed finibus suscipit.
            </p>


        </div>
    )
}

export default ModalPage