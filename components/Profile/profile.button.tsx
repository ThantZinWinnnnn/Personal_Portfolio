import React from 'react'

const ProfileButton = ({text,bgC,textColor,icon,handler}:ButtonProps) => {
  return (
    <button onClick={handler} className={`{
      flex justify-center items-center  border-[1px] border-white py-[0.65rem] sm:py-2 lg:py-3 px-6 rounded-full ${bgC} ${textColor} text-base sm:text-sm font-medium flex gap-2 items-center group transition-all duration-500`}>
       {text}
        {icon}
    </button>
  )
}

export default ProfileButton

type ButtonProps={
    text:string
    bgC:string
    textColor:string
    icon:React.ReactNode,
    handler?:(e:React.MouseEvent<HTMLButtonElement>)=>void
}