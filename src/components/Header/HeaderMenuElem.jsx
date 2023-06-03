import React from 'react'

const HeaderMenuElem = ({title,icon: Icon}) => {
  return (
    <li className='flex flex-col items-center text-gray-600 hover:text-black cursor-pointer'>
        {Icon && <Icon className="w-8 h-8"/>}
        <span className='text-xs font-medium'>{title}</span>
    </li>
  )
}

export default HeaderMenuElem