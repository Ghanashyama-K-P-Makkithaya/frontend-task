import React, { useEffect } from 'react'
import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faAngleRight, faAngleLeft} from '@fortawesome/free-solid-svg-icons'

import './Carousal.css'
import Titles from './Titles'


function Carousal({text="black"}) {
    const [currentIndex, setCurrentIndex] = useState(1)
    const [hover, setHover ] = useState(false)

    const goToPrev = () => {
        if (currentIndex <= 1){
            setCurrentIndex((currentIndex)=>(4))
        }
        else{
            setCurrentIndex((currentIndex)=>(currentIndex - 1))
        }
    }
    const goToNext = () => {
        if (currentIndex >= 4){
            setCurrentIndex(1)
        }
        else{
            setCurrentIndex(currentIndex+1)
        }
    }

    // useEffect(()=>{
    //     const changeSlideInterval = setInterval(goToNext, 5000);
    //     // return ()=>clearInterval(changeSlideInterval)
    // },[currentIndex])

  return (
    <>
    <div
        className="w-full h-screen bg-center bg-no-repeat bg-cover transition-all duration-500"
        style={{
        backgroundImage: `url(src/assets/slides/${currentIndex}.jpg)`,
        color: text,
        }}
    >
        <div
        className="float-left arrow relative top-80 left-10 text-silver cursor-pointer z-10"
        onClick={goToPrev}
        >
        <FontAwesomeIcon icon={faAngleLeft} />
        </div>

        <div
        className="float-right arrow relative top-80 right-10 text-silver cursor-pointer z-10"
        onClick={goToNext}
        >
        <FontAwesomeIcon icon={faAngleRight} />
        </div>

        <div className="w-screen h-screen flex">
        <div
            className="relative w-full text-center my-auto mx-auto font-serif flex "
            style={{ color: `${text}` }}
        >
            <Titles />
        </div>
        </div>
    </div>
    </>
  );
}

export default Carousal