import React from 'react'
import HeartDivider from '../HeartDivider'
function Footer({img="src/assets/slides/4.jpg"}) {
  return (
    <div className='w-screen h:14 bg-center bg-cover bg-no-repeat text-white bg-blend-darken bg-half-black' style={{backgroundImage:`url(${img})`,height:"500px"}}>
      <div className="h-full flex">
      <div className="w-full text-center my-auto mx-auto font-serif flex" >
            <div className="row flex flex-col justify-around mx-auto" >
                <div className="-rotate-10"style={{fontSize:"40px"}}>
                    <div className="-m-2">
                        Thank
                    </div>
                    <div className="-m-2">
                        You
                    </div>
                    
                </div>
                <div className='mx-auto mt-5'>
                    <HeartDivider />
                </div>
                <div className='mt-5 text-center mx-auto text-lg'>
                    <h2>GERRARD & DIANNE</h2>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Footer