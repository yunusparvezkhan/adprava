import React, { useContext } from 'react';
import adpravaLogo from '../media/icons/gold-medal.png';
import Link from './Link';
import NavigationContext from '../context/navigation';
import '../styles/stylelib.css';



const NavBar = () => {

    // This navigation logic was being used up untill this point. But now so that a new Link component is made, all the logics are migrated to that. //
    const { navigate } = useContext(NavigationContext)                                                                                              //
    //                                                                                                                                             //
    const onBtnClick = (path) => {                                                                                                                //
        navigate(path);                                                                                                                          //
    }                                                                                                                                           //
    //-----------------------------------------------------------------------------------------------------------------------------------------//


    return (
        <div>
            <div className="bg-gray-800 flex items-center">
                <img src={adpravaLogo} className='pl-20' />
                <h1 className='text-5xl font-semibold text-gray-100 py-5 pl-2' >Adprava</h1>
                <div className='navbar-button-cont flex ' >

                    {/* These Routing buttons were used up untill this point. But now new Link component would be used  */}
                    {/* ---------------------------------------------------------------------------------------------------------------------//             */}
                    {/* <Button secondary href='/Accordion' onClick={() => onBtnClick('/Accordion')} >Accordion</Button>                    //              */}
                    {/* <Button secondary onClick={() => onBtnClick('/Button')}>Button</Button>                                            //               */}
                    {/* <Button secondary onClick={() => onBtnClick('/Dropdown')}>Dropdown</Button>                                       //                */}
                    {/* -----------------------------------------------------------------------------------------------------------------//                 */}

                    <Link to='/Accordion' >Accordion</Link>
                    <Link to='/Dropdown' >Dropdown</Link>
                    <Link to='/Button' >Buttons</Link>


                </div>
            </div>
        </div >
    )
}

export default NavBar