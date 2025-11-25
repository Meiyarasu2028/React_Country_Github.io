import React from 'react'

const Loading = () => {
  return (
    <div className='flex flex-col justify-center items-center h-screen text-xl font-semibold'>
        <div className='animate-spin rounded-full w-12 h-12 border-t-4 border-blue-500 border-solid'></div>
        <h1 className='font-medium mt-5'>Loading...</h1>
    </div>
  )
}

export default Loading