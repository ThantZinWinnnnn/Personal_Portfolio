"use client"
import React from 'react'
import {IconSun} from "@tabler/icons-react"
const navLists = [
    {
        path:"",
        name:"Home"
    },
    {
        path:"",
        name:"Projects"
    },
    {
        path:"",
        name:"Contact"
    },
    {
        path:"",
        name:"About"
    },
]

const Navbar = () => {
  return (
    <nav className='flex items-center justify-between text-white text-sm sticky top-0 backdrop-blur-md h-[48px] pt-6'>
        <div className='flex items-center'>
            Logo
        </div>
        <ul className='flex items-center gap-12 cursor-pointer'>
            {
                navLists.map((nav,i)=>(
                    <li key={i} className='hover:text-green-600'>{nav.name}</li>
                ))
            }
            <li className='flex items-center ml-10'>
                <IconSun/>
            </li>
        </ul>
    </nav>
  )
}

export default Navbar