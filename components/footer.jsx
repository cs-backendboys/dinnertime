'use client'

import React, { useState } from 'react'

const Footer = () => {

  const NewItem = ({ idMessage }) => {
    const [open, setOpen] = useState(false);

    return (
      <div>
        <button className="btn btn-primary cursor-pointer text-xl text-gray-500 dark:text-gray-400"
          onClick={() => setOpen(!open)}
          type="button"
          data-toggle="modal"
          data-target={`${idMessage}`}
        >
          NEW
        </button>
        {open && (
          <div
            className='modal fade'
          >
            content
          </div>
        )}
      </div>
    )
  }

  return (
    <div className="w-full max-w-xl mx-auto max-w-screen-xl p-4 flex justify-around items-center">
      <span className="cursor-pointer text-sm text-gray-500 dark:text-gray-400">home</span>
      <NewItem />
      <span className="cursor-pointer text-sm text-gray-500 dark:text-gray-400">posts</span>
    </div>
  )
}

export default Footer;