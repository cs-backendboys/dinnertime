import React from 'react'

const Card = ({ url }) => {
  return (
    <div className="w-full max-w-xs xs:w-3/5 my-1 rounded border-2 border-gray-300 shadow text-center flex flex-col items-center rounded">
      {/** Card Title / Name */}
      {/* <h1 className='w-full px-3 py-1 text-sm text-left font-bold'>location</h1> */}

      {/** Card Image */}
      <div className='aspect-square my-3 border-0 flex flex-col items-center justify-center font-thin'>
        <img src={url} className='border-0'/>
      </div>

      {/** Card Caption */}
      <div className='w-full'>
        {/* <div className='flex justify-between mx-3'>
          <div className='flex text-sm'>
            <p className='font-bold'>username:&nbsp;</p>
            <p className='font-light text-left h-10 overflow-hidden'>Lorem ipsum something about a delicious coepernicus</p>
          </div>
          <button className='h-6 mx-2 text-sm rounded border'>{'<3'}</button>
        </div> */}
        <div className='mb-2 -mt-2'>
          <button className='xs:px-12 px-3 mx-1 text-sm text-gray-800 font-thin'>view full image</button>
        </div>
      </div>

    </div>
  )
}

export default Card;