import React from 'react'
import SkillIcon from './skill.icon'

const Skills = ({text,iconsArr}:SkillsProps) => {
    console.log("rendser skills")
  return (
    <div className='max-w-[80rem] mx-auto text-white px-4 sm:px-0'>
        <h4 className='font-rubik text-center text-2xl lg:font-semibold mb-10'>{text}</h4>
        <div className='flex gap-5 sm:gap-8 lg:gap-20 mx-auto justify-center my-4 flex-wrap font-rubik'>
            {iconsArr.map((icon,i)=>(
                <SkillIcon key={i} icon={icon.icon} title={icon.title}  tooltip={icon.tooltip} />
            ))}
        </div>
    </div>
  )
}

export default Skills
type iconArrs = {
    icon:string
    title:string
    tooltip:string
}

type SkillsProps={
    text:string
    iconsArr:Array<iconArrs>
}