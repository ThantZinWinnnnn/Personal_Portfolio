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
    <nav className='flex items-center justify-between text-white'>
        <div className='flex items-center'>
            Logo
        </div>
        <ul className='flex items-center gap-2'>
            {
                navLists.map((nav,i)=>(
                    <li key={i}>{nav.name}</li>
                ))
            }
            <li>
                <IconSun/>
            </li>
        </ul>
    </nav>
  )
}

export default Navbar