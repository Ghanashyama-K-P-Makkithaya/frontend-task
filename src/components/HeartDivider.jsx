import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons'
function HeartDivider() {
  return (
    <div className='flex gap-3 text-center scale-150 text-white'>
        <span className='mx-2 my-2.5 border-t-2 w-4'></span>
        <div>
            <FontAwesomeIcon icon={faHeart} color='white' size='sm'/>
        </div>
        <div className='-ml-9'>
            <FontAwesomeIcon icon={faHeart} color='red' size='sm'/>
        </div>
        <span className='mx-2 my-2.5 border-t-2 w-4'></span>
    </div>
  )
}

export default HeartDivider