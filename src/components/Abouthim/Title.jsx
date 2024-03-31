import React from 'react'
import HeartDivider from '../HeartDivider'

function Title({heading}) {
  return (
    <>
        <div className='w-screen h-full flex justify-end'>

        <div
        className="relative bottom-0 w-full text-center mb-24 mx-auto font-serif flex flex-col justify-end gap-2"
        style={{ color: "white" }}
        >
            <h2 className='text-4xl'>{heading}</h2>
            <div className='mx-auto'>
                    <HeartDivider />
            </div>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et cum, enim rerum culpa deleniti dolor.</p>
        </div>

        

    </div>

    <section className='h-min-100 w-screen'>

    </section>

    </>
  )
}

export default Title