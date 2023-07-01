import React from 'react'
import SkillIcon from './skill.icon'

const Skills = ({text,iconsArr}:SkillsProps) => {
  return (
    <div className='max-w-[80rem] mx-auto text-white'>
        <h4 className='font-rubik text-center text-2xl font-semibold mb-10'>{text}</h4>
        <div className='flex gap-20 mx-auto justify-center my-4'>
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