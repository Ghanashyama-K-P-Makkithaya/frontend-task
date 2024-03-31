import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faHeart} from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';
import './Header.css'
import Navbar from './Navbar';


function Header({themePrimary="red",themeSecondary="transparent", themeText="white"}) {
    return (
    <>
    <div className="flex absolute bg-transparent w-full h-32 md:justify-center justify-start md:pl-0 pl-5" style={{backgroundColor:themeSecondary}}>
        <div className="flex flex-col h-full justify-center">
        <Link to="/" className="logoLink"><div
            className="logo-rounded flex flex-col cursor-pointer z-10"
            style={{
            backgroundColor: { themePrimary },
            color: { themeSecondary },
            }}
        >
            
            <div className="pt-4 z-30">
                <strong className="pr-0.5">G</strong>
                <FontAwesomeIcon icon={faHeart} size="2xs" />
                <strong className="pl-0.5">D</strong>
            </div>
           
        </div> </Link>
        </div>
    </div>
    
    <Navbar textColor={themeText}/>
    

    </>
    );
}

export default Header