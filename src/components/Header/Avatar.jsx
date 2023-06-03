import React from 'react'

const Avatar = ({avatarImg,nik}) => {
  return (
    <div className='flex flex-col items-center text-gray-600 hover:text-black cursor-pointer ml-3'>
        <img src={avatarImg} alt="avatar" className='w-8 h-8 rounded-full object-cover object-center'/>
        <span className='text-xs font-medium'>{nik}</span>
    </div>
  )
}

export default Avatar