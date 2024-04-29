import React from 'react'

const Grid = () => {
  return (
    <div className='w-full p-4 md:px-16 xl:px-24 my-8'>
      <div className='w-full flex gap-4'>
        <div className='w-full flex justify-center items-center h-40 rounded-tl-full bg-primary'>
            <span className='text-4xl text-black font-bold'>1</span>
        </div>
        <div className='w-full flex justify-center items-center h-40 bg-primary'>
        <span className='text-4xl text-black font-bold'>4</span>
        </div>
        <div className='w-full flex justify-center items-center h-40 rounded-br-full bg-primary'>
        <span className='text-4xl text-black font-bold'>2</span>
        </div>
      </div>
    </div>
  )
}

export default Grid
