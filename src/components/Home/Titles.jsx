import React from 'react'
import HeartDivider from '../HeartDivider'

function Titles({textCol="white"}) {
return (
    
            <div className="row flex flex-col justify-around mx-auto" >
                <div className="-rotate-10" style={{fontSize:"40px"}}>
                    <div className="-m-2">
                        Save
                    </div>
                    <div className="-m-2">
                        The Date
                    </div>
                    <div className="-m-2">
                        - 19.12.16 -
                    </div>
                </div>
                <div className='my-10 text-center border-double border-y-4 mx-auto'>
                    <h4>*** WE ARE GETTING MARRIED ***</h4>
                </div>
                <div className='mx-auto'>
                    <HeartDivider />
                </div>
            </div>
        
  )
}

export default Titles