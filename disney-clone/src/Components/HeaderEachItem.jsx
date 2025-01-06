import React from 'react'

function HeaderEachItem({name,Icon}) {
  return (
    <div class= 'text-white flex items-center gap-3 font-semibold text-[18px] cursor-pointer'> 
        <Icon />
        <h2>{name}</h2>     
    </div>
  )
}

export default HeaderEachItem
