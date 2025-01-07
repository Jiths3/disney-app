import React from 'react'
import logo from '../assets/Images/logo.png'
import { HiHome,HiMagnifyingGlass,HiStar,HiPlayCircle,HiTv } from "react-icons/hi2";
import { HiPlus,HiDotsVertical} from "react-icons/hi";
import HeaderEachItem from './HeaderEachItem';




function Header() {

  const menu=[
    {
        name:'HOME',
        icon:HiHome
    },
    {
        name:'SEARCH',
        icon:HiMagnifyingGlass
    },
    {
        name:'WATCH LIST',
        icon:HiPlus
    },
    {
        name:'ORIGINALS',
        icon:HiStar
    },
    {
        name:'MOVIES',
        icon:HiPlayCircle
    },
    {
        name:'SERIES',
        icon:HiTv
    }
]
  return (
  
    <div class='flex items-center justify-between p-5'>

      <div class='flex items-center gap-8'>
        <img src={logo} class="w-[115px] object-cover" />
        <div class='gap-8 items-center hidden md:flex '>
        {menu.map((item)=><HeaderEachItem name={item.name} Icon={item.icon}/>)}
        </div>
        <div class='flex gap-8 items-center md:hidden '>
        {menu.map((item)=><HeaderEachItem name={item.name} Icon={item.icon}/>)}
        </div> 
      </div>  

      <img src="https://ps.w.org/user-avatar-reloaded/assets/icon-256x256.png?rev=2540745" class='w-[40px] rounded-full' />
      
    </div>
  )
}

export default Header
