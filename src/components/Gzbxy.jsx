import React from 'react'
import { toast } from 'react-toastify'

const Gzbxy = () => {
    toast.error("Try resizing your screen.",{
        position: "bottom-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
    })
  return (
    <div className='bg-gray-900'>
        <h1>Hmmm.</h1>
    </div>
  )
}

export default Gzbxy