'use client'
import React from 'react'

const BouncingIcon: React.FC = () => {
  return (
    <div className='fixed bottom-20 right-20 animate-bounce bg-white dark:bg-slate-800 p-2 w-10 h-10 ring-1 ring-slate-900/5 dark:ring-slate-200/20 shadow-lg rounded-full flex flex-row-reverse items-end justify-end m-4'>
      <svg
        className='w-6 h-6 text-violet-500'
        fill='none'
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth='2'
        viewBox='0 0 24 24'
        stroke='currentColor'
      >
        <path d='M19 14l-7 7m0 0l-7-7m7 7V3'></path>
      </svg>
    </div>
  )
}

export default BouncingIcon
