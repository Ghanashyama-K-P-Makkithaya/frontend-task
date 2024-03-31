import React from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faBars} from '@fortawesome/free-solid-svg-icons'
import { menuItems } from "./menuItems";
import MenuItems from "./MenuItems.jsx";
import './Navbar.css'



function Heart({col="red"}){
    return(
        <>
        <div className="inline" style={{color:col}}>&#9829;</div>
        </>
    )
}

function Navbar({textColor="black"}) {
    let col = "black"
return (
    <>
    <ul id="extended-navbar" className='absolute w-full flex flex-wrap justify-evenly pt-12 ltmd:hidden text-white z-10' style={{color:textColor}}>
        <li className='no-content hover:text-red'>
            <Link to="/">Home
            
            {menuItems.map((menu,index) => {
                const depthLevel = 1;
                return <MenuItems items = {
                    menu } key={index} depthLevel={depthLevel}/>})}
            
            </Link>
        </li>
        <li className='hover:text-red'>
            <Heart />
            <Link to="/about-him" className='p-3'>
                About-Him
            </Link>
        </li>
        <li className='hover:text-red'>
            <Heart />
            <Link to="/about-her" className='p-3'>
                About-Her
            </Link>
        </li>
        <li className='mr-12 -ml-4 hover:text-red'>
        <Heart />
            <Link to="" className='p-3'>
                The Story
            </Link>
        </li>
        {/* <li className='reduced-margin no-content'>The Wedding</li> */}
        <li className='no-content -ml-4 hover:text-red'>
            <Link to="" className='p-3'>
                The Wedding
            </Link>
        </li>
        <li className='hover:text-red'>
        <Heart />
            <Link to="" className='p-3'>
                Blog
            </Link>
        </li>
        <li className='hover:text-red'>
        <Heart />
            <Link to="" className='p-3'>
                Page
            </Link>
        </li>
        <li className='hover:text-red'>
        <Heart />
            <Link to="" className='p-3'>
                RSVP
            </Link>
        </li>
    </ul>

    <div className='md:hidden absolute top-0 right-0 mr-8 mt-10 cursor-pointer' onClick={()=>console.log("Clicked Hamburger")}>
        <FontAwesomeIcon icon={faBars} color={col} size='2x'/>
    </div>
    {/* <ul></ul> */}
    </>
  )
}

export default Navbar