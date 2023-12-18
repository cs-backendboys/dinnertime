import React from 'react'

const Card = () => {
  return (
    <div className="w-full max-w-xs xs:w-3/5 my-5 rounded border-2 border-gray-300 shadow text-center flex flex-col items-center rounded">
      {/** Card Title / Name */}
      <h1 className='w-full px-3 py-1 text-sm text-left font-bold'>location</h1>

      {/** Card Image */}
      <div className='w-4/5 aspect-square mb-3 border flex flex-col items-center justify-center font-thin'>
        <p>image container</p>
      </div>

      {/** Card Caption */}
      <div className='w-full'>
        <div className='flex justify-between mx-3'>
          <div className='flex text-sm'>
            <p className='font-bold'>username:&nbsp;</p>
            <p className='font-light text-left h-10 overflow-hidden'>Lorem ipsum something about a delicious coepernicus</p> {/** TODO: replace with icon */}
          </div>
          <button className='h-6 mx-2 text-sm rounded border'>{'<3'}</button>
        </div>
        <div className='my-1'>
          <button className='xs:px-12 px-3 mx-2 text-sm text-gray-800 font-thin'>view details</button>
        </div>
      </div>

    </div>
  )
}

export default Card;